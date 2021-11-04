let counterValue = 0;

const valueEl = document.querySelector('#value');

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

function onDecrementBtnClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function onIncrementBtnClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}


decrementBtnEl.addEventListener("click", onDecrementBtnClick);

incrementBtnEl.addEventListener("click", onIncrementBtnClick);


