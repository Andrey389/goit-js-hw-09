const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

function formSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = textarea.value;
  const data = JSON.stringify({ email, message });
  localStorage.setItem(STORAGE_KEY, data);
}

form.addEventListener('submit', formSubmit);

const jsn = localStorage.getItem(STORAGE_KEY) ?? '';
try {
  const data = JSON.parse(jsn);
  form.elements.email.value = data.email;
  textarea.value = data.message;
} catch {
  console.log('No saved data!');
}
