const MAX_TIME = 10;
let timerCount;
var timerMessage;

document.getElementById("startTimer").addEventListener("click", function () {
  const timerInput = document.getElementById("timerInput");
  const timerDisplay = document.getElementById("timerDisplay");
  const startButton = document.getElementById("startTimer");

  let seconds = Number(timerInput.value);

  if (isNaN(seconds) || seconds < 1 || seconds > MAX_TIME) {
    timerDisplay.textContent = "유효한 숫자(1-10)를 입력하세요!";
    timerDisplay.classList.add("error");
    return;
  }

  timerDisplay.classList.remove("error");
  startButton.disabled = true;
  timerCount = seconds;

  timerMessage = setInterval(function () {
    timerDisplay.textContent = `타이머: ${timerCount}초`;
    timerCount--;

    if (timerCount < 0) {
      clearInterval(timerMessage);
      timerDisplay.textContent = "타이머 종료!";
      startButton.disabled = false;
    }
  }, 1000);
});
