const message = document.getElementById("message");
const picture = document.getElementById("picture");
const button = document.getElementById("startButton");
const sparkles = document.querySelector(".sparkles");

button.addEventListener("click", () => {
  message.style.opacity = "1";
  message.style.transform = "translateY(0)";
  picture.style.opacity = "1";

  christmasSong.play();
  // Create multiple sparkles for animation
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkles.appendChild(sparkle);

    // Remove sparkles after animation
    setTimeout(() => sparkle.remove(), 3000);
  }
});
 