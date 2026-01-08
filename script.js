const overlay = document.getElementById("overlay");
let timer = null;

document.body.addEventListener("click", () => {
  overlay.classList.remove("hidden");

  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    overlay.classList.add("hidden");
  }, 10000);
});
