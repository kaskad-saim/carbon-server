import { closeModal } from './components/modal.js';

const form = document.querySelector('.laboratory__form');
const input = document.getElementById('volatile-substances');
const inputTime = document.getElementById('input-time'); // Поле для времени
const passwordInput = document.getElementById('volatile-substances-password');

const dateCell = document.querySelector('.laboratory__table-td--mnemo-date'); // Ячейка для даты
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
const setCellData = (valueCell, timeCell, dateCell, value, time, date) => {
  if (
    value !== undefined &&
    time !== undefined &&
    date !== undefined &&
    value !== null &&
    time !== null &&
    date !== null
  ) {
    valueCell.textContent = value;
    timeCell.textContent = time;
    dateCell.textContent = date;
  } else {
    valueCell.textContent = 'Нет данных';
    timeCell.textContent = 'Нет данных';
    dateCell.textContent = 'Нет данных';
  }
};

// Функция для получения последних данных
const fetchLastData = async () => {
  try {
    const data = await fetchData('http://169.254.0.156:3000/last');
    if (data && data.value !== null && data.time !== null && data.date !== null) {
      setCellData(valueCell, timeCell, dateCell, data.value, data.time, data.date);
    } else {
      // Если данных нет в базе данных
      setCellData(valueCell, timeCell, dateCell, 'Нет данных', 'Нет данных', 'Нет данных');
    }
    enableInputs();
    errorSpan.textContent = '';
    errorSpan.classList.remove('active');
  } catch (error) {
    console.error('Ошибка при получении последних данных:', error);
    setCellData(valueCell, timeCell, dateCell, 'Нет связи', 'Нет связи', 'Нет связи');
    errorSpan.textContent = 'Нет связи с сервером';
    errorSpan.classList.add('active');
    disableInputs();
  }
};

const tableBody = document.querySelector('.laboratory__table-tbody'); // Таблица с данными за сутки

// Функция для создания строки таблицы
const createTableRow = (dateText, timeText, valueText) => {
  const row = document.createElement('tr');
  row.classList.add('table__tr');

  const dateCellElement = document.createElement('td');
  dateCellElement.classList.add('table__td', 'table__left', 'laboratory__table-td');
  dateCellElement.textContent = dateText;
  row.appendChild(dateCellElement);

  const timeCellElement = document.createElement('td');
  timeCellElement.classList.add('table__td', 'table__left', 'laboratory__table-td');
  timeCellElement.textContent = timeText;
  row.appendChild(timeCellElement);

  const valueCellElement = document.createElement('td');
  valueCellElement.classList.add('table__td', 'table__right', 'laboratory__table-td');
  valueCellElement.textContent = valueText;
  row.appendChild(valueCellElement);

  return row;
};

// Функция для получения данных за последние 24 часа и обновления таблицы
const fetchLastDayData = async () => {
  try {
    const data = await fetchData('http://169.254.0.156:3000/last-day');
    tableBody.innerHTML = '';
    if (data && data.length > 0) {
      data.forEach((item) => {
        const row = createTableRow(item.date || 'Нет данных', item.time || 'Нет данных', item.value || 'Нет данных');
        tableBody.appendChild(row);
      });
    } else {
      // Если данных нет в базе данных
      const row = createTableRow('Нет данных', 'Нет данных', 'Нет данных');
      tableBody.appendChild(row);
    }
    enableInputs();
    errorSpan.textContent = '';
    errorSpan.classList.remove('active');
  } catch (error) {
    console.error('Ошибка при получении данных за последние сутки:', error);
    // В случае отсутствия связи с сервером, отображаем соответствующие сообщения
    const row = createTableRow('Нет связи', 'Нет связи', 'Нет связи');
    tableBody.appendChild(row);
    errorSpan.textContent = 'Нет связи';
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
    .then(({ value, time, date }) => {
      // Очистка полей ввода
      input.value = '';
      inputTime.value = '';
      passwordInput.value = '';
      clearErrors(); // Очищаем ошибки

      // Обновление значений в таблице
      if (value !== undefined && time !== undefined && date !== undefined) {
        setCellData(valueCell, timeCell, dateCell, value, time, date);
      }
      fetchLastDayData(); // Вызов функции для обновления данных за последние сутки
      closeModal('lab-modal'); // Закрываем модалку
    })
    .catch((error) => {
      console.error('Ошибка:', error);
      // Если это ошибка сети, то выводим сообщение
      if (error.message.includes('Failed to fetch') || error.message.includes('Сетевая ошибка')) {
        showError(input, errorSpanValue, 'Нет связи');
        disableInputs(); // Блокируем ввод
      } else {
        showError(input, errorSpanValue, 'Ошибка при отправке данных');
      }
    });
});

// Вызов функций для получения данных при загрузке страницы
fetchLastData();
fetchLastDayData();
