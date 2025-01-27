document.getElementById('surprise-button').addEventListener('click', () => {
    // Hide the button
    document.getElementById('surprise-button').style.display = 'none';

    // Start floating elements animation
    createFloatingElements();

    // Start card animation
    const cardContainer = document.getElementById('card-container');
    const images = ['./images/image1.jpg', './images/image2.jpg', './images/image3.jpg', './images/image4.jpg'];

    images.forEach((src, index) => {
        setTimeout(() => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = src;
            card.appendChild(img);

            cardContainer.appendChild(card);
        }, index * 1500);
    });
});

function createFloatingElements() {
    const floatingArea = document.getElementById('floating-elements');

    for (let i = 0; i < 50; i++) {
        const element = document.createElement('div');
        element.className = Math.random() > 0.5 ? 'heart' : 'flower';
        element.style.left = Math.random() * 100 + 'vw';
        element.style.animationDuration = Math.random() * 3 + 2 + 's';
        element.style.animationDelay = Math.random() * 2 + 's';

        floatingArea.appendChild(element);

        // Remove element after animation ends
        element.addEventListener('animationend', () => element.remove());
    }
}
