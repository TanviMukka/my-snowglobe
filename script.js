const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
    "snow looks prettiest when you're warm inside",
    "you deserve a warm blanket and a quiet moment",
    "soft snow makes every heavy thing look lighter",
    "it is okay to stay in and rest today",
    "a hot drink tastes better when it is cold outside",
    "footprints in the snow means you are making progress",
    "even the coldest days run out of hours",
];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});