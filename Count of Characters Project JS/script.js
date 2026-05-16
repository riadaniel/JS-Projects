const count = document.getElementById('count');
const texInput = document.getElementById('textInput');

texInput.addEventListener('input', () => {
    const textLengthwithoutSpaces = texInput.value.replace(/\s/g, '');
    count.textContent = textLengthwithoutSpaces.length;
});