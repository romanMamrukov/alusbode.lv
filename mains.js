// Carousel logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Start carousel
setInterval(nextSlide, 3000); // Change image every 3 seconds

// Menu switching logic
function showMenu(menu) {
    const drinks = document.getElementById('drinks-menu');
    const food = document.getElementById('food-menu');

    if (menu === 'drinks') {
        drinks.classList.remove('hidden');
        food.classList.add('hidden');
    } else {
        food.classList.remove('hidden');
        drinks.classList.add('hidden');
    }
}
