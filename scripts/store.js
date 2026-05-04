function displayProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    let html = '';
    products.forEach(product => {
        html += `<div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-img">    
         <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <label>Color</label>${buildSelect(product.colors, 'color-' + product.id, product.colors[0])}
            <label>Size</label>${buildSelect(product.sizes, 'size-' + product.id, product.sizes[0])}
            <label>Quantity</label>${buildSelect(product.quantities, 'qty-' + product.id, 1)}
            <button class="action-button primary-button" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>`;
    });
    productList.innerHTML = html;
}

function addToCart(productId) {
    const product = findProduct(productId);
    const color = document.getElementById('color-' + productId).value;
    const size = document.getElementById('size-' + productId).value;
    const quantity = parseInt(document.getElementById('qty-' + productId).value);

    const cart = getCart();
    const existingItem = cart.find(item => item.productId === productId && item.color === color && item.size === size);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ productId, name: product.name, price: product.price, color, size, quantity });
    }

    saveCart(cart);
    alert(`${product.name} added to cart.`);
}