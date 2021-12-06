function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  fieldInput: document.querySelector('input'),
  divBoxes: document.querySelector('#boxes'),
};

const createBoxes = amount => {
  let sizeDivElement = 30;
  let arrayDivElements = [];
  arrayDivElements.length = amount;
  arrayDivElements.fill('');

  const markup = arrayDivElements.map(divBox => {
    divBox = document.createElement('div');
    divBox.style.background = getRandomHexColor();
    divBox.style.width = `${sizeDivElement}px`;
    divBox.style.height = `${sizeDivElement}px`;
    sizeDivElement += 10;
    return divBox;
  });
  refs.divBoxes.append(...markup);
};

const createBox = () => {
  const amount = refs.fieldInput.value;
  createBoxes(amount);
};
refs.btnCreate.addEventListener('click', createBox);

const destroyBoxes = () => {
  refs.divBoxes.innerHTML = '';
};
refs.btnDestroy.addEventListener('click', destroyBoxes);
