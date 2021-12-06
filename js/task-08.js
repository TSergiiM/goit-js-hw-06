const form = document.querySelector('.login-form');

const onSubmit = event => {
  event.preventDefault();
  const options = {
    Email: event.currentTarget.elements.email.value.trim(),
    Password: event.currentTarget.elements.password.value.trim(),
  };
  if (!options.Email || !options.Password) return alert('всі поля повинні бути заповнені');
  console.log(options);
  form.reset();
};

form.addEventListener('submit', onSubmit);
