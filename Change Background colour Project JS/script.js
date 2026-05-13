const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const colorDisplay = document.querySelector('.color-image');

function updateBackgroundColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  colorDisplay.style.borderColor = rgbColor;

  const borderSize = (parseInt(red) + parseInt(green) + parseInt(blue)) / 20;
  colorDisplay.style.borderWidth = `${borderSize}px`;
}

redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);
