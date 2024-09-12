document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.laboratory__form');
  const input = document.getElementById('volatile-substances');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Получаем значение из поля ввода
    const value = input.value.trim(); // Убираем лишние пробелы

    if (value) {
      console.log('Отправленное значение:', value);

      // Отправляем значение на сервер
      fetch('http://169.254.0.156:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      })
        .then((response) => {
          if (!response.ok) throw new Error('Сетевая ошибка');
          return response.json();
        })
        .then((data) => console.log('Ответ сервера:', data))
        .catch((error) => console.error('Ошибка:', error));
    } else {
      console.error('Введите значение');
    }
  });
});
