function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const bgColor = document.querySelector('.color');

const onColorSet = btnChangeColor.addEventListener('click', () => {
  document.body.style.background = getRandomHexColor();
  bgColor.textContent = getRandomHexColor();
});
