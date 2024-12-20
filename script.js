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
    sparkle.style.width = "${Math.random() * 5 + 5}px";
    sparkle.style.height = sparkle.style.width;

    // add random color/
    const color = ["#FF4500", "#ADFF2F", "#87CEEB", "#FF79B4"];

    sparkle.style.backgroundColor = colors[Math.random() * color.length];
    sparkle.style.backShadow = "0 0 8px 2px ${sparkle.style.backgroundColor}";
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

window.addEventListener("click", () => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
// christmasSong.addEventListener("ended", () => {
//   message.style.opacity = "0";
//   button.disabled = false;
// });
