function initShippingPage() {
    displayShippingPage();
    const form = document.getElementById('shipping-form');
    if (form) form.addEventListener('submit', submitShippingForm);

     const fields = [
        'fullName', 'email', 'phone',
        'address', 'city', 'state', 'zipCode'
    ];

    fields.forEach(id => {
        const field = document.getElementById(id);

        if (field) {
            field.addEventListener('input', () => {
                field.setCustomValidity("");
            });

            field.addEventListener('change', () => {
                field.setCustomValidity("");
            });
        }
    });
}

function displayShippingPage() {
    const summaryBox = document.getElementById('shipping-summary');
    if (!summaryBox) return;

    const cart = getCart();
    
    let html = cart.map(item => `
        <div class="summary-line">
            <span>${item.name} (${item.size}, ${item.color}) x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>`).join('');

        const subtotal = getCartTotal(cart);
        const tax = calculateCartTax(cart);
        const total = subtotal + tax;

    html += `
        <div class="summary-line">
            <strong>Subtotal</strong>
            <strong>$${subtotal.toFixed(2)}</strong>
        </div>

        <div class="summary-line">
            <strong>Tax</strong>
            <strong>$${tax.toFixed(2)}</strong>
        </div>

        <div class="summary-line">
            <strong>Total</strong>
            <strong>$${total.toFixed(2)}</strong>
        </div>
    `;

    summaryBox.innerHTML = html;
}

function submitShippingForm(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zip = document.getElementById('zipCode');

    //Pattern conditions for email, phone, and zip
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    const zipPattern = /^\d{5}$/;

    // Validation conditions for all field forms
    if (!fullName.value.trim()) {
        fullName.setCustomValidity("Full name is required.");
        fullName.reportValidity();
        return;
    } else {
        fullName.setCustomValidity("");
    }

   
    if (!email.value.trim()) {
        email.setCustomValidity("Email is required.");
        email.reportValidity();
        return;
    } else if (!emailPattern.test(email.value)) {
        email.setCustomValidity("Enter a valid email address.");
        email.reportValidity();
        return;
    } else {
        email.setCustomValidity("");
    }

   
    if (!phone.value.trim()) {
        phone.setCustomValidity("Phone number is required.");
        phone.reportValidity();
        return;
    } else if (!phonePattern.test(phone.value)) {
        phone.setCustomValidity("Enter a valid US phone number.");
        phone.reportValidity();
        return;
    } else {
        phone.setCustomValidity("");
    }

    
    if (!address.value.trim()) {
        address.setCustomValidity("Address is required.");
        address.reportValidity();
        return;
    } else {
        address.setCustomValidity("");
    }

    
    if (!city.value.trim()) {
        city.setCustomValidity("City is required.");
        city.reportValidity();
        return;
    } else {
        city.setCustomValidity("");
    }

   
    if (!state.value) {
        state.setCustomValidity("Please select a state.");
        state.reportValidity();
        return;
    } else {
        state.setCustomValidity("");
    }

    
    if (!zip.value.trim()) {
        zip.setCustomValidity("Zip code is required.");
        zip.reportValidity();
        return;
    } else if (!zipPattern.test(zip.value)) {
        zip.setCustomValidity("Zip code must be 5 digits.");
        zip.reportValidity();
        return;
    } else {
        zip.setCustomValidity("");
    }

    // Form submission on successful validation
    document.getElementById('shipping-message').innerHTML = `
        <div class="message-box">
            Order placed for ${fullName.value}!
        </div>`;

    localStorage.removeItem('cart');
    event.target.reset();
    displayShippingPage();
}

document.addEventListener("DOMContentLoaded", initShippingPage);
