const products = [
    { 
        id: 1, 
        name: "A4 Gallery Frame", 
        code: "FRM-A4", 
        price: 850,
        images: ["https://i.postimg.cc/90mNSr2L/Whats-App-Image-2026-01-10-at-9-55-52-PM.jpg"],
        desc: "Handcrafted from premium hardwood. Features high-clarity glazing and reinforced mitred corners."
    },
    { 
        id: 2, 
        name: "Named Wallet", 
        code: "WLT-02", 
        price: 550,
        images: ["https://i.postimg.cc/g0wwVD63/Whats-App-Image-2026-01-18-at-11-41-07-AM.jpg"],
        desc: "Premium handcrafted wallet with personalized name engraving. Made from durable material with multiple card slots."
    },
    { 
        id: 3, 
        name: "Wish Pearl Necklace", 
        code: "JWL-03", 
        price: 400,
        images: [
            "https://i.postimg.cc/kgWSzwgY/Whats-App-Image-2026-01-18-at-11-47-18-AM.jpg",
            "https://i.pinimg.com/736x/31/e8/1e/31e81ea380bae6c35143714d1bf37c49.jpg" // The extra Pinterest image you provided
        ],
        desc: "A timeless accessory featuring a genuine-lustre pearl. Hand-strung on a delicate chain."
    },
    { 
        id: 4, 
        name: "Mini Polaroid Ring Album", 
        code: "ALB-04", 
        price: 110,
        images: ["https://i.postimg.cc/kGcJW6Jz/Whats-App-Image-2026-01-18-at-12-08-23-PM.jpg"],
        desc: "A charming, pocket-sized album designed to hold your favorite instant memories."
    },
    { 
        id: 5, 
        name: "Custom Name Slips (30pcs)", 
        code: "SLP-05", 
        price: 100,
        images: ["https://i.postimg.cc/P5Bjpzbw/Whats-App-Image-2026-01-18-at-12-05-26-PM.jpg"],
        desc: "A personalized set of 30 high-quality name slips. Perfect for labeling school books or stationery."
    },
    { 
        id: 6, 
        name: "Handcrafted Greeting Card", 
        code: "CRD-06", 
        price: 120,
        images: ["https://i.postimg.cc/ryYYwyNz/Whats-App-Image-2026-01-18-at-12-04-41-PM.jpg"],
        desc: "A premium, personalized greeting card with artistic textures for any occasion."
    },
    { 
        id: 7, 
        name: "Artisan Mini Frame", 
        code: "FRM-MINI", 
        price: 129,
        images: ["https://i.postimg.cc/jC0Hn1jh/Whats-App-Image-2026-01-18-at-11-56-58-AM.jpg"],
        desc: "A charming handcrafted miniature frame. Ideal for small sketches or passport-sized photos."
    },
    { 
        id: 8, 
        name: "Artisan Gift Hamper", 
        code: "HMP-08", 
        price: 0, // Changed to 0 for custom quoting
        images: ["https://i.postimg.cc/prkLjGRB/Whats-App-Image-2026-01-18-at-1-13-56-PM.jpg","https://i.postimg.cc/j2vSfgt2/Whats-App-Image-2026-01-18-at-1-13-55-PM.jpg","https://i.postimg.cc/brQTgP4q/Whats-App-Image-2026-01-18-at-11-59-08-AM.jpg"],
        desc: "A beautifully curated collection of our finest handcrafted items. Since the contents are fully customizable to your budget and occasion, final pricing will be shared via WhatsApp."
    },
    { 
        id: 9, 
        name: "Individual Polaroid Print", 
        code: "PLR-09", 
        price: 5,
        images: ["https://i.postimg.cc/q7h2Q0CS/Whats-App-Image-2026-01-18-at-12-30-17-PM.jpg"],
        desc: "Your digital memories turned into physical keepsakes on premium gloss paper."
    },
    { 
        id: 10, 
        name: "Customized Artisan Mug", 
        code: "MUG-10", 
        price: 0, // Changed to 0 for custom quoting
        images: ["https://i.postimg.cc/VLvvXgtM/Whats-App-Image-2026-01-18-at-12-32-32-PM.jpg"],
        desc: "A personalized ceramic mug tailored to your vision. Perfect for gifts or personal use. Final rate depends on the complexity of your custom design."
    },
    { 
        id: 11, 
        name: "Acrylic Frame (A4)", 
        code: "ACR-A4", 
        price: 800,
        images: ["https://i.postimg.cc/8PccL4vt/Whats-App-Image-2026-01-18-at-12-39-00-PM.jpg"],
        desc: "Modern A4 acrylic frame that provides a sleek floating effect for your photos."
    },
    { 
        id: 12, 
        name: "Acrylic Frame (A3)", 
        code: "ACR-A3", 
        price: 1100,
        images: ["https://i.postimg.cc/8PccL4vt/Whats-App-Image-2026-01-18-at-12-39-00-PM.jpg"],
        desc: "Large A3 acrylic frame. Perfect for statement pieces and professional certificates."
    },
    { 
        id: 13, 
        name: "Customized Magic Mirror", 
        code: "MIR-13", 
        price: 0, 
        images: ["https://i.postimg.cc/qMqq2wKs/Whats-App-Image-2026-01-18-at-12-37-00-PM.jpg"],
        desc: "A decorative mirror that transforms into a photo frame with light. Price depends on size."
    },
    { 
        id: 14, 
        name: "Customized Chocolate Bouquet", 
        code: "BQT-14", 
        price: 0, 
        images: ["https://i.postimg.cc/sDxx5mWW/Whats-App-Image-2026-01-18-at-12-43-30-PM.jpg"],
        desc: "A stunning arrangement of chocolates. Price varies based on chocolate brands and size."
    }
];

let cart = JSON.parse(sessionStorage.getItem('crazeCraftCart')) || {};

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid');
    const checkoutForm = document.getElementById('checkoutForm');

    if (grid) {
        products.forEach(prod => {
            const currentQty = cart[prod.id] || 0;
            const priceLabel = prod.price > 0 ? `₹${prod.price}` : "Price on Request";
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${prod.images[0]}" alt="${prod.name}" class="product-img" onclick="showDetails(${prod.id})">
                <div class="product-info">
                    <h3>${prod.name}</h3>
                    <p class="price-tag">${priceLabel}</p>
                    <button class="info-link" onclick="showDetails(${prod.id})">View Details</button>
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
            sessionStorage.setItem('crazeCraftCart', JSON.stringify(cart));
            window.location.href = 'checkout.html';
        });

        document.getElementById('clearBtn').addEventListener('click', resetCart);
    }

    if (checkoutForm) {
        renderOrderReview();
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('custName').value;
            const address = document.getElementById('custAddress').value;
            const payment = document.querySelector('input[name="payment"]:checked').value;
            const note = document.getElementById('customNote') ? document.getElementById('customNote').value : "";
            sendWhatsApp(name, address, payment, note);
        });
    }
});

window.updateQty = (id, change) => {
    cart[id] = (cart[id] || 0) + change;
    if (cart[id] < 0) cart[id] = 0;
    const el = document.getElementById(`qty-${id}`);
    if(el) el.innerText = cart[id];
    sessionStorage.setItem('crazeCraftCart', JSON.stringify(cart));
    syncUI();
};

function syncUI() {
    let totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
    const drawer = document.getElementById('cartDrawer');
    const countLabel = document.getElementById('cartCount');
    if(drawer) {
        document.getElementById('drawerTotal').innerText = `${totalItems} Items Selected`;
        totalItems > 0 ? drawer.classList.add('active') : drawer.classList.remove('active');
    }
    if(countLabel) countLabel.innerText = `${totalItems} Items`;
}

function resetCart() {
    cart = {};
    sessionStorage.removeItem('crazeCraftCart');
    document.querySelectorAll('.qty-val').forEach(el => el.innerText = "0");
    syncUI();
}

window.showDetails = (id) => {
    const product = products.find(p => p.id === id);
    const modal = document.getElementById('detailModal');
    if (modal) {
        document.getElementById('modalTitle').innerText = product.name;
        document.getElementById('modalDesc').innerText = product.desc;
        const galleryContainer = document.getElementById('modalGallery');
        galleryContainer.innerHTML = ''; 
        product.images.forEach(imgUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = imgUrl;
            imgElement.className = 'modal-gallery-img';
            galleryContainer.appendChild(imgElement);
        });
        modal.classList.add('active');
    }
};

window.closeModal = () => {
    const modal = document.getElementById('detailModal');
    if (modal) modal.classList.remove('active');
};

function renderOrderReview() {
    const review = document.getElementById('orderReview');
    if (!review) return;
    let total = 0;
    let html = "<h4>Order Summary:</h4><ul>";
    let hasItems = false;
    products.forEach(p => {
        if (cart[p.id] > 0) {
            const subtotal = p.price * cart[p.id];
            total += subtotal;
            const displayPrice = p.price > 0 ? `₹${subtotal}` : "Quote Req.";
            html += `<li><span>${p.name} x${cart[p.id]}</span> <span>${displayPrice}</span></li>`;
            hasItems = true;
        }
    });
    html += `</ul><div class="grand-total"><strong>Estimated Total: ₹${total}</strong></div>`;
    review.innerHTML = hasItems ? html : "<p style='color:red'>Your cart is empty.</p>";
}

function sendWhatsApp(name, address, payment, note) {
    const phoneNumber = "919074855584"; 
    let message = `*NEW ORDER - CRAZE CRAFT*\n\n`;
    message += `*Customer:* ${name}\n`;
    message += `*Address:* ${address}\n`;
    message += `*Payment:* ${payment}\n`;
    if(note) message += `*Notes:* ${note}\n`;
    message += `\n*Items Ordered:*\n`;

    let grandTotal = 0;
    products.forEach(p => {
        if (cart[p.id] > 0) {
            if (p.price > 0) {
                const subtotal = p.price * cart[p.id];
                grandTotal += subtotal;
                message += `• ${p.name} [${p.code}] x${cart[p.id]} = ₹${subtotal}\n`;
            } else {
                message += `• ${p.name} [${p.code}] x${cart[p.id]} = (Quote Required)\n`;
            }
        }
    });
    message += `\n*ESTIMATED TOTAL: ₹${grandTotal}*\n`;
    message += `\n_Please confirm the availability and final quote._`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}