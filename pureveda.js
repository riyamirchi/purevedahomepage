// login
const userIconContainer = document.getElementById('user-icon-container');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');

userIconContainer.addEventListener('click', () => {
    loginLink.style.display = loginLink.style.display === 'none' ? 'inline' : 'none';
    registerLink.style.display = registerLink.style.display === 'none' ? 'inline' : 'none';


});
// hero section
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// cart 



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
    window.location.href = 'pureveda.html';
}




