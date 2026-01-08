const overlay = document.getElementById("overlay");
let timer = null;

// 화면 터치 시 오버레이 표시
document.body.addEventListener("click", () => {
  overlay.classList.remove("hidden");

  // 기존 타이머 초기화
  if (timer) clearTimeout(timer);

  // 10초 후 자동 복귀
  timer = setTimeout(() => {
    overlay.classList.add("hidden");
  }, 10000);
});
