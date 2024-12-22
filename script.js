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
openModalButton.disabled = true;
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
  for (let i = 0; i < 100; i++) {
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");

    meteor.style.top = `${Math.random() * 100}vh`;
    meteor.style.right = `${Math.random() * 100}vw`;
    meteor.style.width = `${Math.random() * 2 + 2}px`;
    meteor.style.height = `${Math.random() * 6 + 4}px`;

    meteorContainer.appendChild(meteor);

    setTimeout(() => {
      meteor.remove();
    }, 5000);
  }
}
setInterval(createMeteor, 500);

function updateCountdown() {
  const now = new Date();
  const christmas = new date(now.getFullYear(), 12, 25);
  if (now > christmas) {
    christmas.setFullYear(now.getFullYear() + 1);
  }
  const diff = christmas - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

// christmasSong.addEventListener("ended", () => {
//   message.style.opacity = "0";
//   button.disabled = false;
// });
