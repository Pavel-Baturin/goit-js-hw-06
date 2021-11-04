const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    let length = inputEl.value.length
    if (length >= 6) {
        inputEl.classList.replace('invalid', 'valid');
    } else {
        inputEl.classList.add('invalid');
    }
}