window.addEventListener('load', () => {
  // Режим
  const rezhimSelectorVr1 = ['.bot-vr1-mode'];
  const rezhimSelectorVr2 = ['.bot-vr2-mode'];

  // Температуры
  const temperatureSelectorsVr1 = [
    '.bot-vr1-temper-1-skolz',
    '.bot-vr1-temper-2-skolz',
    '.bot-vr1-temper-3-skolz',
    '.bot-vr1-temper-topka',
    '.bot-vr1-temper-verh-kam',
    '.bot-vr1-temper-niz-kam',
    '.bot-vr1-temper-vhod-pechi',
    '.bot-vr1-temper-vihod-dozhig',
    '.bot-vr1-temper-kamer-vygruz',
    '.bot-vr1-temper-kotel',
    '.bot-vr1-temper-do-skruber',
    '.bot-vr1-temper-posle-skruber',
    '.bot-vr1-temper-skruber',
    '.bot-vr1-temper-granul',
  ];
  const temperatureSelectorsVr2 = [
    '.bot-vr2-temper-1-skolz',
    '.bot-vr2-temper-2-skolz',
    '.bot-vr2-temper-3-skolz',
    '.bot-vr2-temper-topka',
    '.bot-vr2-temper-verh-kam',
    '.bot-vr2-temper-niz-kam',
    '.bot-vr2-temper-vhod-pechi',
    '.bot-vr2-temper-vihod-dozhig',
    '.bot-vr2-temper-kamer-vygruz',
    '.bot-vr2-temper-kotel',
    '.bot-vr2-temper-do-skruber',
    '.bot-vr2-temper-posle-skruber',
    '.bot-vr2-temper-skruber',
    '.bot-vr2-temper-granul',
  ];

  // Уровни
  const levelSelectorsVr1 = ['.bot-vr1-uroven-skrubber', '.bot-vr1-uroven-hvo', '.bot-vr1-uroven-kotla'];
  const levelSelectorsVr2 = ['.bot-vr2-uroven-skrubber', '.bot-vr2-uroven-hvo', '.bot-vr2-uroven-kotla'];

  // Давление
  const pressureSelectorsVr1 = ['.bot-vr1-davl-posle-skruber', '.bot-vr1-davl-kotla'];
  const pressureSelectorsVr2 = ['.bot-vr2-davl-posle-skruber', '.bot-vr2-davl-kotla'];

  // Разрежение
  const underPressureSelectorsVr1 = ['.bot-vr1-razr-topka', '.bot-vr1-razr-kotel', '.bot-vr1-razr-niz-kam'];
  const underPressureSelectorsVr2 = ['.bot-vr2-razr-topka', '.bot-vr2-razr-kotel', '.bot-vr2-razr-niz-kam'];

  const allowedOrigins = ['http://169.254.7.86:92', 'http://169.254.6.19:50'];

  const postValues = (selectors, prefix) => {
    selectors.forEach((selector, index) => {
      const element = document.querySelector(selector);
      const value = element ? element.textContent.trim() : null;
      if (value !== null) {
        console.log(`Отправляется ${prefix}${index + 1}: ${value}`);

        allowedOrigins.forEach((origin) => {
          window.parent.postMessage({ type: `${prefix}${index + 1}`, value }, origin);
        });
      } else {
        console.log(`${selector} не найден или значение равно null.`);
      }
    });
  };

  // Отправка состояния режима
  postValues(rezhimSelectorVr1, 'rezhim');
  postValues(rezhimSelectorVr2, 'rezhim');

  // Отправка значений температуры
  postValues(temperatureSelectorsVr1, 'temperature');
  postValues(temperatureSelectorsVr2, 'temperature');

  // Отправка значений уровней
  postValues(levelSelectorsVr1, 'level');
  postValues(levelSelectorsVr2, 'level');

  // Отправка значений давления
  postValues(pressureSelectorsVr1, 'pressure');
  postValues(pressureSelectorsVr2, 'pressure');

  // Отправка значений разрежения
  postValues(underPressureSelectorsVr1, 'underpressure');
  postValues(underPressureSelectorsVr2, 'underpressure');
});
