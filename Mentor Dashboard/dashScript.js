// JavaScript
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

// Add an event listener to the document to close the dropdown menu when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    dropdownMenu.classList.remove('show');
  }
});


/** sliding effect **/
document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;
    const cardCount = carousel.children[0].children.length;
    const cardWidth = carousel.children[0].children[0].offsetWidth + 20; // Adjust for margin

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < cardCount - 1) {
            currentIndex++;
            updateCarousel();
        } else {
            currentIndex = 0;
            updateCarousel();
        }
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Duplicate the carousel content to create a continuous sliding effect
    const carouselContent = carousel.children[0].cloneNode(true);
    carousel.appendChild(carouselContent);
});