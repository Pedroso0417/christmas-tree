const message = document.getElementById("message");
const button = document.getElementById("startButton");
const sparklesContainer = document.querySelector(".sparkles");
const christmasSong = document.getElementById("christmasSong");
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModalButton");
const closeButton = document.querySelector(".close-button");
button.addEventListener("click", () => {
  message.style.opacity = "1";
  christmasSong.play();

  // Create multiple sparkles for animation
  for (let i = 0; i < 100; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.width = `${Math.random() * 5 + 5}px`; // Correct
    sparkle.style.height = sparkle.style.width;

    const color = ["#FF4500", "#ADFF2F", "#87CEEB", "#FF79B4"];
    sparkle.style.backgroundColor =
      color[Math.floor(Math.random() * color.length)];

    // add random color/
    sparkle.style.boxShadow = `0 0 8px 2px ${sparkle.style.backgroundColor}`;
    // sparkle.style.animationDelay = `${Math.random() * 2}s`;
    sparklesContainer.appendChild(sparkle);

    // Remove sparkles after animation
    setTimeout(() => sparkle.remove(), 5000);
  }
});

openModalButton.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
button.disabled = false;

const meteorContainer = document.querySelector(".meteor-container");
function createMeteor() {
  if (!meteorContainer) return;
  const meteor = document.createElement("div");
  meteor.classList.add("meteor");

  meteor.style.top = `${Math.random() * 100}vh`;
  meteor.style.left = `${Math.random() * 100}vw`;
  meteor.style.width = `${Math.random() * 10 + 10}px`;
  meteor.style.height = `${Math.random() * 60 + 40}px`;

  meteorContainer.appendChild(meteor);

  setTimeout(() => {
    meteor.remove();
  }, 3000);
}

setInterval(createMeteor, 500);
// christmasSong.addEventListener("ended", () => {
//   message.style.opacity = "0";
//   button.disabled = false;
// });
