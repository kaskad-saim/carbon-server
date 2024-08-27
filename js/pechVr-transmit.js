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

  // Исполнительные механизмы

  const imSelectorsVr1 = ['.bot-vr1-im-kotla'];
  const imSelectorsVr2 = ['.bot-vr2-im-kotla'];

  // Мощность горелки
  const gorelkaSelectorsVr1 = ['.bot-vr1-mosh-gorelki'];
  const gorelkaSelectorsVr2 = ['.bot-vr2-mosh-gorelki'];

  const allowedOrigins = ['http://169.254.0.167:3001'];

  // const allowedOrigins = ['http://169.254.7.86:3001', 'http://169.254.0.167:3001', 'http://169.254.6.19:50'];

  const postValuesVr1 = (selectors, prefix) => {
    selectors.forEach((selector, index) => {
      const element = document.querySelector(selector);
      const value = element ? element.textContent.trim() : null;
      if (value !== null) {
        allowedOrigins.forEach((origin) => {
          window.parent.postMessage({ type: `pechVr1${prefix}${index + 1}`, value }, origin);
        });

        console.log(`Отправляется pechVr1${prefix}${index + 1}: ${value}`);
      } else {
        console.log(`${selector} не найден или значение равно null.`);
      }
    });
  };

  const postValuesVr2 = (selectors, prefix) => {
    selectors.forEach((selector, index) => {
      const element = document.querySelector(selector);
      const value = element ? element.textContent.trim() : null;
      if (value !== null) {
        allowedOrigins.forEach((origin) => {
          window.parent.postMessage({ type: `pechVr2${prefix}${index + 1}`, value }, origin);
        });

        console.log(`Отправляется pechVr2${prefix}${index + 1}: ${value}`);
      } else {
        console.log(`${selector} не найден или значение равно null.`);
      }
    });
  };

  // Отправка состояния режима
  postValuesVr1(rezhimSelectorVr1, 'rezhim');
  postValuesVr2(rezhimSelectorVr2, 'rezhim');

  // Отправка значений температуры
  postValuesVr1(temperatureSelectorsVr1, 'temperature');
  postValuesVr2(temperatureSelectorsVr2, 'temperature');

  // Отправка значений уровней
  postValuesVr1(levelSelectorsVr1, 'level');
  postValuesVr2(levelSelectorsVr2, 'level');

  // Отправка значений давления
  postValuesVr1(pressureSelectorsVr1, 'pressure');
  postValuesVr2(pressureSelectorsVr2, 'pressure');

  // Отправка значений разрежения
  postValuesVr1(underPressureSelectorsVr1, 'underpressure');
  postValuesVr2(underPressureSelectorsVr2, 'underpressure');

  // Отправка значений исполнительного механизма
  postValuesVr1(imSelectorsVr1, 'im');
  postValuesVr2(imSelectorsVr2, 'im');

  // Отправка показаний мощности горелки
  postValuesVr1(gorelkaSelectorsVr1, 'gorelka');
  postValuesVr2(gorelkaSelectorsVr2, 'gorelka');

  // Отправка текущего времени
  const timestamp = new Date().toLocaleString();
  const timeMessageVr1 = `pechVr1Time: ${timestamp}`;
  const timeMessageVr2 = `pechVr2Time: ${timestamp}`;

  allowedOrigins.forEach((origin) => {
    console.log(`Отправляется ${timeMessageVr1}`);
    window.parent.postMessage({ type: 'pechVr1Time', value: timestamp }, origin);
  });
  allowedOrigins.forEach((origin) => {
    console.log(`Отправляется ${timeMessageVr2}`);
    window.parent.postMessage({ type: 'pechVr2Time', value: timestamp }, origin);
  });
});
