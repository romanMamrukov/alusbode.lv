document.addEventListener('DOMContentLoaded', () => {
    // === Carousel Logic ===
    const slides = document.querySelectorAll('.carousel-image');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    if (slides.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, 3000); // Switch every 3 seconds
    }

    // === Menu Switching Logic ===
    const drinksMenu = document.getElementById('drinks-menu');
    const foodMenu = document.getElementById('food-menu');

    window.showMenu = (menu) => {
        if (!drinksMenu || !foodMenu) return;

        const isDrinks = menu === 'drinks';
        drinksMenu.classList.toggle('hidden', !isDrinks);
        foodMenu.classList.toggle('hidden', isDrinks);
    };
});

// curten menu
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Attach event listener to nav links inside the curtain menu
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("#myNav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      closeNav(); // Close the curtain menu
    });
  });
});