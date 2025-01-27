const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;

// Create dots for each slide
slides.forEach((_, index) => {
    const dot = document.createElement('button');
    if (index === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => moveToSlide(index));
});

const dots = document.querySelectorAll('.dots button');

// Move to a specific slide
function moveToSlide(index) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
    updateCarousel();
}

// Update the carousel's position
function updateCarousel() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Show next slide
next.addEventListener('click', () => {
    moveToSlide((currentIndex + 1) % slides.length);
});

// Show previous slide
prev.addEventListener('click', () => {
    moveToSlide((currentIndex - 1 + slides.length) % slides.length);
});

// Auto-slide every 3 seconds
setInterval(() => {
    moveToSlide((currentIndex + 1) % slides.length);
}, 3000);
