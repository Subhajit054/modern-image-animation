let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    // Hide the current slide
    slides[currentSlide].classList.remove('active');

    // Move to the next slide (or loop back to the first)
    currentSlide = (currentSlide + 1) % slides.length;

    // Show the new slide
    slides[currentSlide].classList.add('active');
}

// Initialize the slideshow
slides[currentSlide].classList.add('active');

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);
