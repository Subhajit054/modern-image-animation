const cards = document.querySelectorAll('.card img');
let currentCard = 0;

function flipCard() {
  if (currentCard < cards.length) {
    cards[currentCard].style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      cards[currentCard].style.transform = 'rotateY(0deg)';
      currentCard++;
      flipCard();
    }, 1000);
  }
}

flipCard();
