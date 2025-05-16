const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const birthDateInput = document.getElementById('birthDate');
const sexInput = document.getElementById('sex');
const profesionInput = document.getElementById('Profesion');
const addButton = document.getElementById('addButton');
const tableBody = document.getElementById('myTable').getElementsByTagName('tbody')[0];

addButton.addEventListener('click', () => {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const sex = sexInput.value.trim();
  const profesion = profesionInput.value.trim();
  const birthDate = birthDateInput.value;


  // Обчислення віку
  if (firstName !== '' && lastName !== '' && birthDate !== '' && sex !== '' && profesion !== '') {

    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    // Створюємо новий рядок
    const newRow = document.createElement('tr');

    // Створюємо клітинки
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = firstName;
    newRow.appendChild(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = lastName;
    newRow.appendChild(lastNameCell);

    const birthDateCell = document.createElement('td');
    birthDateCell.textContent = age; 
    newRow.appendChild(birthDateCell);

    const sexCell = document.createElement('td');
    sexCell.textContent = sex;
    newRow.appendChild(sexCell);

    const profesionCell = document.createElement('td');
    profesionCell.textContent = profesion;
    newRow.appendChild(profesionCell);

    // Додаємо рядок до таблиці
    tableBody.appendChild(newRow);

    // Очищаємо поля вводу
    firstNameInput.value = '';
    lastNameInput.value = '';
    birthDateInput.value = '';
    sexInput.value = '';
    profesionInput.value = '';
  } else {
    // Handle empty input fields if necessary
  }
});
// Властивість коли наскаєш на інпут
document.querySelectorAll('.form-group input').forEach(input => {
  input.addEventListener('focus', function() {
    this.previousElementSibling.style.backgroundColor = 'rgba(230, 230, 230, 0.21)';
  });
  input.addEventListener('blur', function() {
    this.previousElementSibling.style.backgroundColor = 'rgba(236, 234, 234, 0.3)';
  });
});