const weightInput = document.getElementById('weightInput');
const result = document.getElementById('result');
const button = document.getElementById('convertBtn');
const unitSelect = document.getElementById('unitSelect');

button.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const unit = document.getElementById('unitSelect').value;
  if(unitSelect.value === 'lb') {
    const convertedWeight = weight * 2.20462; 
    result.textContent = convertedWeight.toFixed(2) + ' lb';
  } else {
    const convertedWeight = weight / 2.20462; 
    result.textContent = convertedWeight.toFixed(2) + ' kg';
  }
});