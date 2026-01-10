Craze Craft | Bespoke Art & Commissions
Craze Craft is a minimalist, high-end landing page and e-commerce gallery designed for boutique artists. This platform allows customers to browse handcrafted items, select quantities via a user-friendly interface, and submit custom commission orders directly to the artist via WhatsApp.

🚀 Features
Modern Warmth Aesthetic: A premium look using a Parchment, Saddle Brown, and Eucalyptus Green palette.

Two-Page Flow:

Home: An elegant entrance with a clear Call to Action.

Shop: A dynamic gallery where customers can select products with an interactive plus/minus system.

Floating Cart Drawer: A persistent UI element that tracks selections in real-time.

Seamless Checkout: A dedicated form for capturing delivery addresses and preferred payment methods (UPI/COD).

WhatsApp Integration: Automatically generates a professionally formatted order summary, including product codes, customer details, and payment preferences.

Fully Responsive: Optimized for desktop, tablet, and mobile (with no blue tap highlight for a native-app feel).

🛠️ Technical Stack
This project is built using Vanilla Web Technologies to ensure maximum performance and zero dependencies:

HTML5: Semantic structure for better SEO and accessibility.

CSS3: Custom properties (variables), Flexbox, and Grid for a modern layout.

JavaScript: Custom logic for state management (cart), session storage, and WhatsApp API integration.

🤖 Built with Gemini
This version of Craze Craft was designed and developed in collaboration with Gemini. The architecture follows "The Odin Project" standards—prioritizing clean code, separation of concerns, and a functional user experience.

📁 Project Structure
Plaintext

craze-craft/
├── index.html      # Landing page / Hero section
├── shop.html       # Product gallery & selection
├── checkout.html   # Delivery details & payment selection
├── style.css       # Global styles & responsive design
├── script.js       # Cart logic & WhatsApp integration
└── README.md       # Project documentation
🔧 How to Use
Configure WhatsApp: Open script.js and update the phoneNumber variable in the sendWhatsApp function with your actual phone number (include country code, e.g., 911234567890).

Add Products: Update the products array in script.js to change names, codes, or images.

Deploy: Upload these files to any static hosting service like GitHub Pages, Vercel, or Netlify.

Future Enhancements
[ ] Image zoom on product click.

[ ] Integration of a real-time UPI QR code generator.

[ ] Email backup for orders using EmailJS.