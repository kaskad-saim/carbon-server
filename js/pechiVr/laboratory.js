import { closeModal } from "./components/modal.js";

const form = document.querySelector('.laboratory__form');
const input = document.getElementById('volatile-substances');
const passwordInput = document.querySelector('#volatile-substances-password');
const timeCell = document.querySelector('.laboratory__table-td--mnemo-time'); // Ячейка для времени
const valueCell = document.querySelector('.laboratory__table-td--mnemo-val'); // Ячейка для значения
const errorSpan = document.querySelector('.laboratory__form-error'); // Спан для ошибок

// Функция для выполнения запроса и обработки данных
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Ошибка при получении данных');
    return await response.json();
  } catch (error) {
    console.error('Ошибка:', error);
    return null; // Возвращаем null в случае ошибки
  }
};

// Установка данных в ячейки
const setCellData = (valueCell, timeCell, value, createdAt) => {
  if (value !== undefined && createdAt !== undefined) {
    valueCell.textContent = value;
    timeCell.textContent = new Date(createdAt).toLocaleString();
  } else {
    valueCell.textContent = 'Нет данных';
    timeCell.textContent = 'Нет данных';
  }
};

// Функция для получения последних данных
const fetchLastData = async () => {
  const data = await fetchData('http://169.254.0.156:3000/last');
  setCellData(valueCell, timeCell, data?.value, data?.createdAt);

  // Блокировка ввода и отображение ошибки при отсутствии связи с сервером
  if (!data && error.message.includes('Failed to fetch')) {
    input.setAttribute('readonly', true);
    errorSpan.textContent = 'Нет связи с сервером';
    errorSpan.classList.add('active');
  }
};

const tableBody = document.querySelector('.table__tbody');
const now = new Date();

// Функция для получения данных за последние 24 часа и обновления таблицы
const fetchLastDayData = async () => {
  const data = await fetchData('http://169.254.0.156:3000/last-day');

  if (data) {
    // Очистка текущего содержимого таблицы
    tableBody.innerHTML = '';

    const filteredData = data
      .filter((item) => {
        const itemTime = new Date(item.createdAt);
        return itemTime >= new Date(now.getTime() - 24 * 60 * 60 * 1000);
      })
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    // Обновление таблицы с новыми данными
    filteredData.forEach((item) => {
      const row = document.createElement('tr');
      row.classList.add('table__tr');

      const timeCell = document.createElement('td');
      timeCell.classList.add('table__td', 'laboratory__table-td', 'laboratory__table-td--time', 'table__left');
      timeCell.textContent = new Date(item.createdAt).toLocaleString();
      row.appendChild(timeCell);

      const valueCell = document.createElement('td');
      valueCell.classList.add('table__td', 'laboratory__table-td', 'laboratory__table-td--val', 'table__right');
      valueCell.textContent = item.value;
      row.appendChild(valueCell);

      tableBody.appendChild(row);
    });
  } else {
    console.error('Ошибка получения данных за последние 24 часа');
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Получаем значения из полей ввода
  let value = input.value.trim(); // Убираем лишние пробелы
  let password = passwordInput.value.trim();

  // Получаем спаны для ошибок
  const errorSpanValue = document.getElementById('error-volatile-substances');
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

  // Если всё в порядке, отправляем значение на сервер
  console.log('Отправленное значение:', value);
  fetch('http://169.254.0.156:3000/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value }),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Сетевая ошибка');
      return response.json();
    })
    .then(({ value, createdAt }) => {
      console.log('Ответ сервера:', { value, createdAt });
      // Очистка полей ввода
      input.value = '';
      passwordInput.value = '';
      clearErrors(); // Очищаем ошибки

      // Обновление значений в таблице
      if (value !== undefined && createdAt !== undefined) {
        valueCell.textContent = value;
        timeCell.textContent = new Date(createdAt).toLocaleString();
      }
      fetchLastDayData(); // Вызов функции для обновления данных за последние сутки
      closeModal('lab-modal'); // Закрываем модалку
    })
    .catch((error) => {
      console.error('Ошибка:', error);
      // Если это ошибка сети, то выводим сообщение
      if (error.message.includes('Failed to fetch')) {
        showError(input, errorSpanValue, 'Нет связи с сервером');
        input.setAttribute('readonly', true); // Блокируем ввод
      } else {
        showError(input, errorSpanValue, 'Ошибка при отправке данных');
      }
    });
});

// Вызов функции для получения данных при загрузке страницы
fetchLastDayData();

// Получаем последние данные при загрузке страницы
fetchLastData();
