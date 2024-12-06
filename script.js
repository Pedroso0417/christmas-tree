const message = document.getElementById("message");
const button = document.getElementById("startButton");
const sparklesContainer = document.querySelector(".sparkles");
const christmasSong = document.getElementById("christmasSong");

button.addEventListener("click", () => {
  message.style.opacity = "1";
  message.style.transform = "scale(1.2) translateY(0)";
  message.style.transition = "transform 1s ease, opacity 1s ease";

  christmasSong.play();
  // Create multiple sparkles for animation
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    sparkles.appendChild(sparkle);

    // Remove sparkles after animation
    setTimeout(() => sparkle.remove(), 3000);
  }
  button.disabled = true;
});

christmasSong.addEventListener("ended", () => {
  message.style.opacity = "0";
  button.disabled = false;
});
