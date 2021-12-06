const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const onRangeChange = event => {
  text.style.fontSize = event.currentTarget.value + 'px';
};

fontSizeControl.addEventListener('input', onRangeChange);
