const randomColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
randomColorBtn.addEventListener('click', onRandomColorBtnClick)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onRandomColorBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}