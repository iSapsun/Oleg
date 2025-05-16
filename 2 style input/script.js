const input = document.getElementById('fname');

input.addEventListener('input', () => {
  input.setAttribute('value', input.value);
});