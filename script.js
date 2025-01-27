// Falling hearts animation function
function fallingHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.innerText = "❤️";
    heart.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}%;
        top: -20px;
        font-size: ${Math.random() * 20 + 20}px;
        animation: fall 3s linear;`;
    document.getElementById('floating-hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }, 150);
}

fallingHearts(); // Start falling hearts

let currentCard = 0;
const cards = document.querySelectorAll('.card');

function showNextCard() {
  if (currentCard < cards.length) {
    cards[currentCard].style.transform = "rotateY(180deg)";
    currentCard++;
    setTimeout(showNextCard, 1500); // 1.5 seconds between showing cards
  }
}

document.addEventListener('DOMContentLoaded', showNextCard);
