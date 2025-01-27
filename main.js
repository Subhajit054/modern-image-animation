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
const floatingElements = document.getElementById('floating-elements');
const cardWrapper = document.getElementById('card-wrapper');

// Create floating elements
function createFloatingElements() {
    const types = ['heart', 'flower'];
    for (let i = 0; i < 30; i++) {
        const element = document.createElement('div');
        const type = types[Math.floor(Math.random() * types.length)];
        element.classList.add(type === 'heart' ? 'floating-heart' : 'floating-flower');
        element.style.left = `${Math.random() * 100}vw`;
        element.style.animationDuration = `${Math.random() * 3 + 2}s`;
        floatingElements.appendChild(element);
    }
}

// Create cards dynamically
function createCards() {
    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = image;
        card.appendChild(img);
        cardWrapper.appendChild(card);
    });
}

// Reveal the animation on button click
revealButton.addEventListener('click', () => {
    document.querySelector('.intro').classList.add('hidden');
    animationContainer.classList.remove('hidden');
    createFloatingElements();
    createCards();
});
