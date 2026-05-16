const btn = document.getElementById("generateBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 100) + 1;
  result.textContent = number;

});