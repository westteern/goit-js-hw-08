import throttle from 'lodash.throttle';

const FORM = 'feedback-form-state';

let formData = {};

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('submit', onSubmit);
formRef.addEventListener('input', throttle(onType, 500));

if (localStorage.getItem(FORM)) {
  const storageValue = localStorage.getItem(FORM);
  const parsedStorageValue = JSON.parse(storageValue);

  formRef.message.value = auditValue(parsedStorageValue.message);
  formRef.email.value = auditValue(parsedStorageValue.email);
  formData = JSON.parse(storageValue);
}

function onType(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
  } else {
    console.log('The form has been sent', formData);
    e.currentTarget.reset();
    localStorage.removeItem(FORM);
    formData = {};
  }
}

function auditValue(value) {
  if (value) {
    return value;
  }
  return '';
}
