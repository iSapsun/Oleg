const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const birthDateInput = document.getElementById('birthdate');
const sexInput = document.getElementById('sex');
const profesionInput = document.getElementById('profesion');
const addButton = document.getElementById('addButton');
const tableBody = document.getElementById('myTable').getElementsByTagName('tbody')[0];

// Додаємо анімацію для всіх інпутів
document.querySelectorAll('.input-container input').forEach(input => {
  input.addEventListener('input', () => {
    input.setAttribute('value', input.value);
  });
});

// --- Додаємо ініціалізацію datepicker ОКРЕМО ---
document.addEventListener('DOMContentLoaded', function() {
  const elem = document.querySelector('input[name="birthdate"]'); // або name="foo", якщо так у HTML
  if (elem) {
    const datepicker = new Datepicker(elem, {
      format: 'dd-mm-yyyy',
      autohide: true,
    });
    elem.addEventListener('focus', () => {
      datepicker.show();
    });
  }
});

// --- Далі ваш addButton.addEventListener як був ---
addButton.addEventListener('click', (event) => {
  event.preventDefault(); 

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const sex = sexInput.value.trim();
  const profesion = profesionInput.value.trim();
  const birthDate = birthDateInput.value.trim();

  // Перевірка на порожні поля
  if (!firstName || !lastName || !sex || !profesion || !birthDate) {
    alert('Слиш голова ! Ти шось пропусти! Ну...');
    return;
  }

  // Створюємо новий рядок таблиці
  const newRow = document.createElement('tr');

  // Додаємо клітинку з ім'ям
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = firstName;
  newRow.appendChild(firstNameCell);

  // Додаємо клітинку з прізвищем
  const lastNameCell = document.createElement('td');
  lastNameCell.textContent = lastName;
  newRow.appendChild(lastNameCell);

  // Перетворення дати з dd-mm-yyyy у yyyy-mm-dd
  let birth = null;
  if (/^\d{2}-\d{2}-\d{4}$/.test(birthDate)) {
    const [day, month, year] = birthDate.split('-');
    birth = new Date(`${year}-${month}-${day}`);
  } else {
    birth = new Date(birthDate); // fallback, якщо формат інший
  }

  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  // Додаємо вік у таблицю
  const ageCell = document.createElement('td');
  ageCell.textContent = age;
  newRow.appendChild(ageCell);

  const sexCell = document.createElement('td');
  sexCell.textContent = sex;
  newRow.appendChild(sexCell);

  const profesionCell = document.createElement('td');
  profesionCell.textContent = profesion;
  newRow.appendChild(profesionCell);

  tableBody.appendChild(newRow);

  // Додаємо клас для анімації з невеликою затримкою
  setTimeout(() => {
    newRow.classList.add('add-row-animation');
  }, 10);

  // Знімаємо клас після завершення анімації (наприклад, 2 секунди)
  setTimeout(() => {
    newRow.classList.remove('add-row-animation');
  }, 2010);


  [firstNameInput, lastNameInput, birthDateInput, sexInput, profesionInput].forEach(input => {
    input.value = '';
    input.setAttribute('value', '');
  });
});































