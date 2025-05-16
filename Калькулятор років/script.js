function calculateAge() {
  const dateInput = document.getElementById('dateInput').value;
  const birthDate = new Date(dateInput);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const m = currentDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }
  document.getElementById('output').innerHTML = ` ${age} years old`;
}