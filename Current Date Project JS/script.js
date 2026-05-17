const currentDayElement = document.getElementById('current-day');
const currentMonthElement = document.getElementById('current-month');
const currentYearElement = document.getElementById('current-year');
const now = new Date();

currentDayElement.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
currentMonthElement.textContent = now.toLocaleDateString('en-US', { month: 'long' });
currentYearElement.textContent = now.getFullYear();
