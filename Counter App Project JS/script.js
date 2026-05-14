const add = document.getElementById('increment');
const subtract = document.getElementById('decrement');
const counter = document.getElementById('counter');
let count = 0;

add.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    if (count > 0){
        counter.style.borderColor= 'green';
    }
});

subtract.addEventListener('click', () => {
    count--;
    counter.textContent = count;
    if (count < 0){
        counter.style.borderColor= 'red';
    }
});
