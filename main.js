document.addEventListener("DOMContentLoaded", () => {
    const revealButton = document.getElementById("reveal-button");
    const cardContainer = document.getElementById("card-container");
    const images = [
      "images/image1.jpg",
      "images/image2.jpg",
      "images/image3.jpg",
      "images/image4.jpg",
      "images/image5.jpg",
      "images/image6.jpg",
      "images/image7.jpg",
      "images/image8.jpg",
    ];
  
    // Falling hearts animation
    function fallingHearts() {
      setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("falling-heart");
        heart.textContent = "❤️";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.fontSize = `${Math.random() * 20 + 20}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
      }, 150);
    }
  
    // Reveal cards animation
    function revealCards() {
      cardContainer.innerHTML = ""; // Clear the container
      images.forEach((image, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.animationDelay = `${index * 0.5}s`;
        const img = document.createElement("img");
        img.src = image;
        card.appendChild(img);
        cardContainer.appendChild(card);
      });
    }
  
    // Button click event
    revealButton.addEventListener("click", () => {
      revealButton.classList.add("hidden"); // Hide button
      cardContainer.classList.remove("hidden"); // Show cards
      fallingHearts(); // Start hearts animation
      revealCards(); // Show cards
    });
  });
  