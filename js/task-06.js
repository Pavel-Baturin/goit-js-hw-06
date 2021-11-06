const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    let inputLength = inputEl.value.length;
    const validLength = Number(inputEl.dataset.length);
    if (inputLength === validLength) {
        inputEl.classList.replace('invalid', 'valid');
    } else {
        inputEl.classList.add('invalid');
    }
}