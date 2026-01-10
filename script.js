const products = [
    { id: 1, name: "Product 1", code: "P-01", img: "https://i.pinimg.com/736x/31/e8/1e/31e81ea380bae6c35143714d1bf37c49.jpg" },
    { id: 2, name: "Product 2", code: "P-02", img: "https://i.pinimg.com/736x/31/e8/1e/31e81ea380bae6c35143714d1bf37c49.jpg" },
    { id: 3, name: "Product 3", code: "P-03", img: "https://i.pinimg.com/736x/31/e8/1e/31e81ea380bae6c35143714d1bf37c49.jpg" },
    { id: 4, name: "Product 4", code: "P-04", img: "https://i.pinimg.com/736x/31/e8/1e/31e81ea380bae6c35143714d1bf37c49.jpg" },
    { id: 5, name: "Product 5", code: "P-05", img: "https://i.pinimg.com/736x/31/e8/1e/31e81ea380bae6c35143714d1bf37c49.jpg" },
    { id: 6, name: "Product 6", code: "P-06", img: "https://i.pinimg.com/736x/31/e8/1e/31e81ea380bae6c35143714d1bf37c49.jpg" },
    { id: 7, name: "Product 7", code: "P-07", img: "https://i.pinimg.com/736x/31/e8/1e/31e81ea380bae6c35143714d1bf37c49.jpg" },
    { id: 8, name: "Product 8", code: "P-08", img: "https://i.pinimg.com/736x/31/e8/1e/31e81ea380bae6c35143714d1bf37c49.jpg" },
    { id: 9, name: "Product 9", code: "P-09", img: "https://i.pinimg.com/736x/31/e8/1e/31e81ea380bae6c35143714d1bf37c49.jpg" },
    { id: 10, name: "Product 10", code: "P-10", img: "https://i.pinimg.com/736x/31/e8/1e/31e81ea380bae6c35143714d1bf37c49.jpg" }
];

let cart = JSON.parse(sessionStorage.getItem('crazeCraftCart')) || {};

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid');
    const checkoutForm = document.getElementById('checkoutForm');

    // --- SHOP PAGE LOGIC ---
    if (grid) {
        products.forEach(prod => {
            const currentQty = cart[prod.id] || 0;
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${prod.img}" alt="${prod.name}" class="product-img">
                <div class="product-info">
                    <h3>${prod.name}</h3>
                    <p>Handcrafted Piece</p>
                    <div class="cart-controls">
                        <button class="qty-btn" onclick="updateQty(${prod.id}, -1)">−</button>
                        <span class="qty-val" id="qty-${prod.id}">${currentQty}</span>
                        <button class="qty-btn" onclick="updateQty(${prod.id}, 1)">+</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
        syncUI();

        document.getElementById('placeOrder').addEventListener('click', () => {
            // Save current cart state before navigating to checkout
            sessionStorage.setItem('crazeCraftCart', JSON.stringify(cart));
            window.location.href = 'checkout.html';
        });

        document.getElementById('clearBtn').addEventListener('click', () => {
            cart = {};
            sessionStorage.removeItem('crazeCraftCart');
            document.querySelectorAll('.qty-val').forEach(el => el.innerText = "0");
            syncUI();
        });
    }

    // --- CHECKOUT PAGE LOGIC ---
    if (checkoutForm) {
        const review = document.getElementById('orderReview');
        let reviewHTML = "<h4>Order Summary:</h4><ul>";
        let hasItems = false;

        products.forEach(p => {
            if (cart[p.id] > 0) {
                reviewHTML += `<li>${p.name} x ${cart[p.id]}</li>`;
                hasItems = true;
            }
        });

        if (!hasItems) {
            review.innerHTML = "<p style='color:red'>No items selected. Please go back to the gallery.</p>";
        } else {
            review.innerHTML = reviewHTML + "</ul>";
        }

        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('custName').value;
            const address = document.getElementById('custAddress').value;
            const payment = document.querySelector('input[name="payment"]:checked').value;
            
            sendWhatsApp(name, address, payment);
        });
    }
});

function updateQty(id, change) {
    cart[id] = (cart[id] || 0) + change;
    if (cart[id] < 0) cart[id] = 0;
    
    const el = document.getElementById(`qty-${id}`);
    if(el) el.innerText = cart[id];
    
    // Auto-save to session storage on every click
    sessionStorage.setItem('crazeCraftCart', JSON.stringify(cart));
    syncUI();
}

function syncUI() {
    let totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
    const drawer = document.getElementById('cartDrawer');
    const countLabel = document.getElementById('cartCount');
    
    if(drawer) {
        document.getElementById('drawerTotal').innerText = `${totalItems} Items Selected`;
        totalItems > 0 ? drawer.classList.add('active') : drawer.classList.remove('active');
    }

    if(countLabel) {
        countLabel.innerText = `${totalItems} Items`;
    }
}

function sendWhatsApp(name, address, payment) {
    const phoneNumber = "1234567890"; // REPLACE WITH YOUR NUMBER
    let message = `*NEW ORDER - CRAZE CRAFT*\n\n`;
    message += `*Customer:* ${name}\n`;
    message += `*Address:* ${address}\n`;
    message += `*Payment:* ${payment}\n\n`;
    message += `*Items Ordered:*\n`;

    products.forEach(p => {
        if (cart[p.id] > 0) {
            message += `• ${p.name} [Code: ${p.code}] x${cart[p.id]}\n`;
        }
    });

    message += `\n_Please confirm the availability of these items._`;
    
    window.open(`https://wa.me/${+919074855584}?text=${encodeURIComponent(message)}`, '_blank');
}