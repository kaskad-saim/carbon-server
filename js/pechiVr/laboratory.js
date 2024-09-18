import { closeModal } from './components/modal.js';

const form = document.querySelector('.laboratory__form');
const input = document.getElementById('volatile-substances');
const inputTime = document.getElementById('input-time'); // Поле для времени
const passwordInput = document.querySelector('#volatile-substances-password');
const timeCell = document.querySelector('.laboratory__table-td--mnemo-time'); // Ячейка для времени
const valueCell = document.querySelector('.laboratory__table-td--mnemo-val'); // Ячейка для значения
const errorSpan = document.querySelector('.laboratory__form-error'); // Спан для ошибок

// Функция для блокировки инпутов
const disableInputs = () => {
  input.setAttribute('readonly', true);
  inputTime.setAttribute('readonly', true);
  passwordInput.setAttribute('readonly', true);
};

// Функция для разблокировки инпутов
const enableInputs = () => {
  input.removeAttribute('readonly');
  inputTime.removeAttribute('readonly');
  passwordInput.removeAttribute('readonly');
};

// Функция для выполнения запроса и обработки данных
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Ошибка при получении данных');
    return await response.json();
  } catch (error) {
    console.error('Ошибка:', error);
    throw error; // Перебрасываем ошибку для обработки в вызывающей функции
  }
};

// Установка данных в ячейки
const setCellData = (valueCell, timeCell, value, time) => {
  if (value !== undefined && time !== undefined && value !== null && time !== null) {
    valueCell.textContent = value;
    timeCell.textContent = time;
  } else {
    valueCell.textContent = 'Нет данных';
    timeCell.textContent = 'Нет данных';
  }
};

// Функция для получения последних данных
const fetchLastData = async () => {
  try {
    const data = await fetchData('http://169.254.0.156:3000/last');
    if (data && data.value !== null && data.time !== null) {
      setCellData(valueCell, timeCell, data.value, data.time);
    } else {
      // Если данных нет в базе данных
      setCellData(valueCell, timeCell, 'Нет данных', 'Нет данных');
    }
    enableInputs();
    errorSpan.textContent = '';
    errorSpan.classList.remove('active');
  } catch (error) {
    console.error('Ошибка при получении последних данных:', error);
    setCellData(valueCell, timeCell, 'Нет связи с сервером', 'Нет связи с сервером');
    errorSpan.textContent = 'Нет связи с сервером';
    errorSpan.classList.add('active');
    disableInputs();
  }
};

const tableBody = document.querySelector('.laboratory__table-tbody'); // Таблица с данными за сутки

// Функция для получения данных за последние 24 часа и обновления таблицы
const fetchLastDayData = async () => {
  try {
    const data = await fetchData('http://169.254.0.156:3000/last-day');
    if (data && data.length > 0) {
      tableBody.innerHTML = '';
      data.forEach((item) => {
        const row = document.createElement('tr');
        row.classList.add('table__tr');

        const timeCellElement = document.createElement('td');
        timeCellElement.classList.add('table__td', 'laboratory__table-td', 'laboratory__table-td--time', 'table__left');
        timeCellElement.textContent = item.time || 'Нет данных';
        row.appendChild(timeCellElement);

        const valueCellElement = document.createElement('td');
        valueCellElement.classList.add(
          'table__td',
          'laboratory__table-td',
          'laboratory__table-td--val',
          'table__right'
        );
        valueCellElement.textContent = item.value || 'Нет данных';
        row.appendChild(valueCellElement);

        tableBody.appendChild(row);
      });
    } else {
      // Если данных нет в базе данных
      tableBody.innerHTML = `
        <tr class="table__tr">
          <td class="table__td laboratory__table-td--mnemo table__left">Нет данных</td>
          <td class="table__td laboratory__table-td--mnemo table__right">Нет данных</td>
        </tr>`;
    }
    enableInputs();
    errorSpan.textContent = '';
    errorSpan.classList.remove('active');
  } catch (error) {
    console.error('Ошибка при получении данных за последние сутки:', error);
    // В случае отсутствия связи с сервером, отображаем две ячейки с текстом 'Нет связи с сервером'
    tableBody.innerHTML = `
      <tr class="table__tr">
        <td class="table__td laboratory__table-td laboratory__table-td--time table__left">Нет связи с сервером</td>
        <td class="table__td laboratory__table-td laboratory__table-td--val table__right">Нет связи с сервером</td>
      </tr>`;
    errorSpan.textContent = 'Нет связи с сервером';
    errorSpan.classList.add('active');
    disableInputs();
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Получаем значения из полей ввода
  let value = input.value.trim(); // Убираем лишние пробелы
  let time = inputTime.value.trim(); // Получаем введенное время
  let password = passwordInput.value.trim();

  // Получаем спаны для ошибок
  const errorSpanValue = document.getElementById('error-volatile-substances');
  const errorSpanTime = document.getElementById('error-input-time');
  const errorSpanPassword = document.getElementById('error-volatile-substances-password');

  // Функция для отображения ошибок
  const showError = (inputElement, errorSpan, message) => {
    errorSpan.textContent = message;
    errorSpan.classList.add('active');
    inputElement.classList.add('error');
  };

  // Функция для очистки ошибок
  const clearErrors = () => {
    errorSpanValue.textContent = '';
    errorSpanValue.classList.remove('active');
    input.classList.remove('error');
    errorSpanTime.textContent = '';
    errorSpanTime.classList.remove('active');
    inputTime.classList.remove('error');
    errorSpanPassword.textContent = '';
    errorSpanPassword.classList.remove('active');
    passwordInput.classList.remove('error');
  };

  // Очистка ошибок перед новой проверкой
  clearErrors();

  // Проверка на пустое значение в поле "летучие вещества"
  if (!value) {
    showError(input, errorSpanValue, 'Введите значение');
    return; // Прерываем выполнение
  }

  // Проверка на пустое значение в поле "время"
  if (!time) {
    showError(inputTime, errorSpanTime, 'Введите время');
    return; // Прерываем выполнение
  }

  // Заменяем запятую на точку для корректного десятичного значения
  value = value.replace(',', '.');

  // Проверка на корректный ввод (число) и диапазон от 0 до 16
  if (isNaN(value) || value < 0 || value > 16) {
    showError(input, errorSpanValue, 'Введите число от 0 до 16');
    return; // Прерываем выполнение
  }

  // Проверка на неверный пароль
  if (password !== '123') {
    showError(passwordInput, errorSpanPassword, 'Неверный пароль');
    return; // Прерываем выполнение
  }

  // Если всё в порядке, отправляем значение и время на сервер
  fetch('http://169.254.0.156:3000/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value, time }),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Сетевая ошибка');
      return response.json();
    })
    .then(({ value, time }) => {
      // Очистка полей ввода
      input.value = '';
      inputTime.value = '';
      passwordInput.value = '';
      clearErrors(); // Очищаем ошибки

      // Обновление значений в таблице
      if (value !== undefined && time !== undefined) {
        valueCell.textContent = value;
        timeCell.textContent = time;
      }
      fetchLastDayData(); // Вызов функции для обновления данных за последние сутки
      closeModal('lab-modal'); // Закрываем модалку
    })
    .catch((error) => {
      console.error('Ошибка:', error);
      // Если это ошибка сети, то выводим сообщение
      if (error.message.includes('Failed to fetch') || error.message.includes('Сетевая ошибка')) {
        showError(input, errorSpanValue, 'Нет связи с сервером');
        disableInputs(); // Блокируем ввод
      } else {
        showError(input, errorSpanValue, 'Ошибка при отправке данных');
      }
    });
});

// Вызов функций для получения данных при загрузке страницы
fetchLastData();
fetchLastDayData();
