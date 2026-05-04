const products = [
    { id: 1, image: 'images/lopapeysa.jpg', name: 'Lopapeysa', price: 400.00, colors: ['Gold', 'Black', 'Brown', 'Blue', 'Green'], sizes: ['Child', 'Small', 'Medium', 'Large'], quantities: [1, 2, 3, 4, 5, 6] },
    { id: 2, image: 'images/hat.jpg', name: 'Knitted Hat', price: 75.00, colors: ['Gray', 'Black', 'Brown', 'Blue', 'Green'], sizes: ['Child', 'Small', 'Medium', 'Large'], quantities: [1, 2, 3, 4, 5, 6] },
    { id: 3, image: 'images/mittens.jpg', name: 'Lopi Mittens', price: 75.00, colors: ['Black', 'Khaki', 'Red'], sizes: ['One Size'], quantities: [1, 2, 3, 4, 5, 6] },
    { id: 4, image: 'images/album.png', name: 'Album', price: 25.00, colors: ['N/A'], sizes: ['CD', 'Vinyl'], quantities: [1, 2, 3,] },
    { id: 5, image: 'images/cheese.jpg', name: 'Sheep Cheese Wheel', price: 15.00, colors: ['N/A'], sizes: ['500 g'], quantities: [1, 2, 3] },
	{ id: 6, image: 'images/sulta.jpg', name: 'Rabarbarasulta', price: 10.00, colors: ['N/A'], sizes: ['400 g Jar'], quantities:[1, 2, 3] }
];

function getCart() {
    const cartText = localStorage.getItem('cart');
    return cartText ? JSON.parse(cartText) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function findProduct(productId) {
    return products.find(p => p.id === productId);
}

function getCartTotal(cart) {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function buildSelect(options, id, selectedValue) {
    let html = `<select id="${id}">`;
    options.forEach(opt => {
        const selected = String(opt) === String(selectedValue) ? 'selected' : '';
        html += `<option value="${opt}" ${selected}>${opt}</option>`;
    });
    return html + '</select>';
}

function buildCartSelect(options, selectedValue, index, fieldName) {
    let html = `<select onchange="changeOption(${index}, '${fieldName}', this.value)">`;
    options.forEach(opt => {
        const selected = String(opt) === String(selectedValue) ? 'selected' : '';
        html += `<option value="${opt}" ${selected}>${opt}</option>`;
    });
    return html + '</select>';
}