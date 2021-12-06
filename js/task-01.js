const arrayOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', arrayOfCategories.length);
arrayOfCategories.forEach(element => {
  const elementTitle = element.querySelector('h2');
  console.log('Category:', elementTitle.textContent);
  const elementLi = element.querySelectorAll('li');
  console.log('Elements:', elementLi.length);
});
