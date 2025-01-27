const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg'
];

const revealButton = document.getElementById('reveal-button');
const animationContainer = document.getElementById('animation-container');
const wrapper = document.getElementById('animation-wrapper');

// Create image elements dynamically
images.forEach(image => {
    const div = document.createElement('div');
    div.classList.add('animation-item');
    div.style.backgroundImage = `url(${image})`;
    wrapper.appendChild(div);
});

let currentIndex = 0;

// Function to cycle through images
function cycleImages() {
    const items = document.querySelectorAll('.animation-item');
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    currentIndex = (currentIndex + 1) % images.length;
}

// Reveal the animation on button click
revealButton.addEventListener('click', () => {
    document.querySelector('.intro').classList.add('hidden');
    animationContainer.classList.remove('hidden');
    setInterval(cycleImages, 3000);
    cycleImages();
});
