const level = (level, current, levelPercent, fullPersent, fullPx) => {
  let valuePercent = (current * 100) / fullPersent;
  levelPercent.innerHTML = Math.floor(valuePercent);
  let valuePx = (valuePercent * fullPx) / 100;

  level.style.height = valuePx + 'px';

  if (levelPercent.innerHTML <= 25) {
    level.style.backgroundColor = 'red';
  }
};

const levelHvo = document.querySelector('.column-hvo__percent');
const valueHvoCurrent = document.querySelector('.uroven-vody-hvo-value').innerHTML;
const levelHvoPercent = document.querySelector('.column-hvo__span-1');

const levelSkrubber = document.querySelector('.column-skrubber__percent');
const valueSkrubberCurrent = document.querySelector('.uroven-vanne-skrubber-value').innerHTML;
const levelSkrubberPercent = document.querySelector('.column-skrubber__span-1');

const levelKotel = document.querySelector('.column-kotel__percent');
const valueKotelCurrent = document.querySelector('.uroven-v-barabane-kotla-value').innerHTML;
const levelKotelPercent = document.querySelector('.column-kotel__span-1');

let screenWidth = window.innerWidth;

if ((levelHvo, valueHvoCurrent, levelHvoPercent)) {
  level(levelHvo, valueHvoCurrent, levelHvoPercent, 6000, 41);
  if (screenWidth < 1568) {
    level(levelHvo, valueHvoCurrent, levelHvoPercent, 6000, 32);
  }
}

if ((levelSkrubber, valueSkrubberCurrent, levelSkrubberPercent)) {
  level(levelSkrubber, valueSkrubberCurrent, levelSkrubberPercent, 1000, 139);
  if (screenWidth < 1568) {
    level(levelSkrubber, valueSkrubberCurrent, levelSkrubberPercent, 1000, 105);
  }
}

if ((levelKotel, valueKotelCurrent, levelKotelPercent)) {
  level(levelKotel, valueKotelCurrent, levelKotelPercent, 100, 85);

  if (screenWidth < 1568) {
    level(levelKotel, valueKotelCurrent, levelKotelPercent, 100, 64);
  }
}
