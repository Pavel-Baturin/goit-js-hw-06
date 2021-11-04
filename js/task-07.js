const sliderEl = document.querySelector('#font-size-control');
const textEL = document.querySelector('#text');

sliderEl.addEventListener('input', onInputSlider);

function onInputSlider(elem) {
    textEL.style.fontSize = `${elem.currentTarget.value}px`;
    textEL.textContent;
}

