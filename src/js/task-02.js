const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

ingredients.forEach(elem => {
  const el = document.createElement('li');
  el.textContent = elem;
  el.classList.add('item');
  document.querySelector('ul').append(el);
});
