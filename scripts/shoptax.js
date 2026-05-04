const TAX_STANDARD = 0.11;
const TAX_CLOTHING = 0.24;

// Tax calculation rules for shop items

function calculateCartTax(cart) {
    let standardTotal = 0;
    let clothingTotal = 0;

    cart.forEach(item => {
        const lineTotal = item.price * item.quantity;

        const name = item.name.toLowerCase();

        // Clothing items
        if (name.includes("sweater") || name.includes("hat") || name.includes("mittens")) {
            clothingTotal += lineTotal;
        }
        // Other souvenirs (album, cheese, jam)
        else {
            standardTotal += lineTotal;
        }
    });

    const taxStandard = standardTotal * TAX_STANDARD;
    const taxClothing = clothingTotal * TAX_CLOTHING;

    return taxStandard + taxClothing;
}

function getCartTotalsWithTax(cart) {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = calculateCartTax(cart);
    return {
        subtotal,
        tax,
        total: subtotal + tax
    };
}