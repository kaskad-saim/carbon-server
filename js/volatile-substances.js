// для лаборатории
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.laboratory__form');
  const input = document.getElementById('volatile-substances');

  form.addEventListener('submit', function (event) {
    // Предотвращаем стандартное поведение формы
    event.preventDefault();

    // Получаем значение из поля ввода
    const value = input.value;

    if (value) {
      console.log('Отправленное значение:', value);

      // Отправляем значение на сервер
      fetch('http://169.254.0.156:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: value }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Сетевая ошибка');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Ответ сервера:', data);
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });
    } else {
      console.error('Введите значение');
    }
  });
});