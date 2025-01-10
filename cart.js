let cart = [];

function addToCart(productName, productPrice, productImage, productDescription) {
    cart.push({ name: productName, price: productPrice, image: productImage, description: productDescription });
    updateCartCount();
    saveCartToLocalStorage();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function viewCart() {
    window.location.href = 'cart.html';
}
