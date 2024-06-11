const kran = document.querySelector('.mnemo__kran-img img');
const kranLeft = document.querySelector('.mnemo__kran-left');
const kranRight = document.querySelector('.mnemo__kran-right');

const kranBorderLeft = (param, color) => {
  if (window.innerWidth > 1280) {
    param.style = `border-left: 20px solid ${color}`;
  } else {
    param.style = `border-left: 15px solid ${color}`;
  }
};

const kranBorderRight = (param, color) => {
  if (window.innerWidth > 1280) {
    param.style = `border-right: 20px solid ${color}`;
  } else {
    param.style = `border-right: 15px solid ${color}`;
  }
};

const green = 'green';
const red = 'red';

if (kran.src == 'http://techsite4/KASKAD/pic/images/true.gif') {
  kranBorderLeft(kranLeft, green);
  kranBorderRight(kranRight, green);
  console.log(typeof kran.src);
} else {
  kranBorderLeft(kranLeft, red);
  kranBorderRight(kranRight, red);
  console.log(typeof kran.src);
}

const hoverNoneBtn = document.querySelector('.hover-none-btn');
const hoverElemParam = document.querySelectorAll('.mnemo__tooltip');

const toggleBtnText = () => {
  hoverNoneBtn.innerHTML =
    hoverNoneBtn.innerHTML == 'Выключить всплывающие подсказки'
      ? 'Включить всплывающие подсказки'
      : 'Выключить всплывающие подсказки';
};

hoverNoneBtn.addEventListener('click', () => {
  for (let i = 0; i < hoverElemParam.length; i++) {
    const item = hoverElemParam[i];
    item.classList.toggle('enabled-hover');
  }
  toggleBtnText();
});

// const left = (param, color) => {
//   param.style = `border-left: 20px solid ${color}`;
// };

// const right = (param, color) => {
//   param.style = `border-right: 20px solid ${color}`;
// };

// if (kran.src == 'http://Techsite4/kaskad/pic/images/true.gif') {
//   left(kranLeft, green);
//   right(kranRight, green);
//   console.log('green');
// } else {
//   left(kranLeft, red);
//   right(kranRight, red);
//   console.log('red');
// }
