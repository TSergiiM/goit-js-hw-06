const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

ingredients.forEach(elem => {
  const elemLi = document.createElement('li');
  elemLi.textContent = elem;
  elemLi.classList.add('item');
  document.querySelector('ul').append(elemLi);
});
