import throttle from 'lodash.throttle';

const FORM = 'feedback-form-state';

const formData = {};

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textaereaRef = document.querySelector('textarea');

console.log(inputRef.value);

if (localStorage.getItem(FORM)) {
  inputRef.value;
}
// formRef.addEventListener('submit', onSubmit);
formRef.addEventListener('input', throttle(onType, 500));

function onType(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM, JSON.stringify(formData));
}
