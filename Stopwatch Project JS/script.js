const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const display = document.querySelector('.timer');
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
function updateDisplay() {
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const milliseconds = String(elapsedTime % 1000).padStart(3, '0');
  display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}
function startTimer() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}   
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  updateDisplay();
}
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);    
