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
  const drinksMenu = document.getElementById('drinks');
  const foodMenu = document.getElementById('food');

  window.showMenu = (menu) => {
    if (!drinksMenu || !foodMenu) return;
    const isDrinks = menu === 'drinks';
    drinksMenu.classList.toggle('hidden', !isDrinks);
    foodMenu.classList.toggle('hidden', isDrinks);
  };

  // === Menu Switch Buttons ===
  const drinksBtn = document.getElementById('drinksBtn');
  const foodBtn = document.getElementById('foodBtn');

  if (drinksBtn) {
    drinksBtn.addEventListener('click', () => showMenu('drinks'));
  }
  if (foodBtn) {
    foodBtn.addEventListener('click', () => showMenu('food'));
  }

  // === Curtain Nav Click Behavior ===
  const navLinks = document.querySelectorAll("#myNav a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      const menuType = link.getAttribute("data-menu");
      if (menuType === 'drinks' || menuType === 'food') {
        showMenu(menuType); // ← called immediately, no timeout
      }

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      closeNav();
    });
  });

  // === Sticky + Shrinking Header ===
  const header = document.getElementById('mainHeader');
  const shrinkThreshold = 50;

  window.addEventListener('scroll', () => {
    header.classList.toggle('shrink', window.scrollY > shrinkThreshold);
  });

  // === Open / Close Nav Overlay ===
  const body = document.body;
  const navOverlay = document.getElementById("myNav");

  window.openNav = () => {
    navOverlay.style.width = "100%";
    body.style.overflow = "hidden"; // Disable scroll behind menu
  };

  window.closeNav = () => {
    navOverlay.style.width = "0%";
    body.style.overflow = ""; // Re-enable scroll
  };
});