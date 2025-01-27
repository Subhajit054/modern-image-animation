const { motion } = window["framer-motion"];

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

const wrapper = document.getElementById('animation-wrapper');

images.forEach((image, index) => {
    const div = document.createElement('div');
    div.classList.add('animation-item');
    div.style.backgroundImage = `url(${image})`;
    wrapper.appendChild(div);
});

let currentIndex = 0;

function cycleImages() {
    const items = document.querySelectorAll('.animation-item');
    items.forEach((item, index) => {
        item.style.opacity = index === currentIndex ? '1' : '0';
    });
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(cycleImages, 3000);
cycleImages();
