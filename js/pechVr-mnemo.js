const modeTitle = document.querySelector('.current-param__subtitle-span');
const temper3Skolz = document.querySelector('.temper-3-skolz');
const temper3SkolzSpan = document.querySelector('.temper-3-skolz-span');
const temper1Skolz = document.querySelector('.temper-1-skolz');
const sirenVR1mnemo = document.querySelector('.siren__media-vr1-mnemo');
const sirenVR2mnemo = document.querySelector('.siren__media-vr2-mnemo');
const sirenAnimation = document.querySelector('.light-alarm__content');

// условия по параметрам
const animationRun = (param) => {
  param.style.animationPlayState = 'running';
  if (sirenVR1mnemo) {
    if (modeTitle.innerHTML == 'Установившийся режим') {
      sirenVR1mnemo.play();
    } else {
      sirenVR1mnemo.pause();
    }
  }
  if (sirenVR2mnemo) {
    if (modeTitle.innerHTML == 'Установившийся режим') {
      sirenVR2mnemo.play();
    } else {
      sirenVR2mnemo.pause();
    }
  }
};

const animationPaused = (param) => {
  param.style.animationPlayState = 'paused';
};

//табличка с параметрами которые не соответствуют тoifребованиям
const tableTbody = document.querySelector('.table__tbody');

const addRowIfRunning = (param, description) => {
  if (param.style.animationPlayState === 'running') {
    const row = `
      <tr class="table__tr">
        <td class="table__td table__left">${description}</td>
        <td class="table__td table__right">${param.innerHTML}</td>
      </tr>
    `;
    tableTbody.innerHTML += row;
    sirenAnimation.classList.remove('siren-off');
  }
};

//mode
if (temper1Skolz.innerHTML < 550 && temper1Skolz.innerHTML > 50) {
  modeTitle.innerHTML = 'Выход на режим';

  if (temper3Skolz.innerHTML > 750) {
    temper3Skolz.style.animationPlayState = 'running';
    temper3SkolzSpan.style.animationPlayState = 'running';
  } else {
    temper3Skolz.style.animationPlayState = 'paused';
    temper3SkolzSpan.style.animationPlayState = 'paused';
  }

  addRowIfRunning(temper3Skolz, 'На 3-ей скользящей, °C');
} else if (temper1Skolz.innerHTML > 550) {
  modeTitle.innerHTML = 'Установившийся режим';
  if (temper3Skolz.innerHTML > 400) {
    animationRun(temper3Skolz);
    animationRun(temper3SkolzSpan);
  } else {
    animationPaused(temper3Skolz);
    animationPaused(temper3SkolzSpan);
  }
  addRowIfRunning(temper3Skolz, 'На 3-ей скользящей, °C');
} else {
  modeTitle.innerHTML = 'Печь не работает';
}
//------------------------------------------------------------------

if (temper1Skolz.innerHTML > 50) {
  const temper1SkolzSpan = document.querySelector('.temper-1-skolz-span');

  if (temper1Skolz.innerHTML > 800 || temper1Skolz.innerHTML < 550) {
    animationRun(temper1Skolz);
    animationRun(temper1SkolzSpan);
  } else {
    animationPaused(temper1Skolz);
    animationPaused(temper1SkolzSpan);
  }

  addRowIfRunning(temper1Skolz, 'На 1-ой скользящей, °C');

  const nizZagrKam = document.querySelector('.razr-niz-zagr-kam');
  const nizZagrKamSpan = document.querySelector('.razr-niz-zagr-kam-span');
  let nizZagrKamChanged = nizZagrKam.innerHTML.replace(',', '.');
  let nizZagrKamResult = Number(nizZagrKamChanged);

  if (nizZagrKamResult > -1 || nizZagrKamResult < -5) {
    nizZagrKam.style.animationPlayState = 'running';
    nizZagrKamSpan.style.animationPlayState = 'running';
  } else {
    nizZagrKam.style.animationPlayState = 'paused';
    nizZagrKamSpan.style.animationPlayState = 'paused';
  }

  addRowIfRunning(nizZagrKam, 'Низ загрузочной камеры, кгс/м2');

  const temperVnizKamerZagruz = document.querySelector('.temper-vniz-kamer-zagruz');
  const temperVnizKamerZagruzSpan = document.querySelector('.temper-vniz-kamer-zagruz-span');

  if (temperVnizKamerZagruz.innerHTML > 1100 || temperVnizKamerZagruz.innerHTML < 1000) {
    animationRun(temperVnizKamerZagruz);
    animationRun(temperVnizKamerZagruzSpan);
  } else {
    animationPaused(temperVnizKamerZagruz);
    animationPaused(temperVnizKamerZagruzSpan);
  }

  addRowIfRunning(temperVnizKamerZagruz, 'Внизу камеры загрузки, °C');

  const temperVerhKamerZagruz = document.querySelector('.temper-verh-kamer-zagruz');
  const temperVerhKamerZagruzSpan = document.querySelector('.temper-verh-kamer-zagruz-span');

  if (temperVerhKamerZagruz.innerHTML > 1000) {
    animationRun(temperVerhKamerZagruz);
    animationRun(temperVerhKamerZagruzSpan);
  } else {
    animationPaused(temperVerhKamerZagruz);
    animationPaused(temperVerhKamerZagruzSpan);
  }

  addRowIfRunning(temperVerhKamerZagruz, 'Вверху камеры загрузки, °C');

  const temperVhodPechDozhig = document.querySelector('.temper-vhod-pech-dozhig');
  const temperVhodPechDozhigSpan = document.querySelector('.temper-vhod-pech-dozhig-span');

  if (temperVhodPechDozhig.innerHTML > 1200) {
    animationRun(temperVhodPechDozhig);
    animationRun(temperVhodPechDozhigSpan);
  } else {
    animationPaused(temperVhodPechDozhig);
    animationPaused(temperVhodPechDozhigSpan);
  }

  addRowIfRunning(temperVhodPechDozhig, 'На входе печи дожига, °C');

  const temper2Skolz = document.querySelector('.temper-2-skolz');
  const temper2SkolzSpan = document.querySelector('.temper-2-skolz-span');

  if (temper2Skolz.innerHTML > 700) {
    animationRun(temper2Skolz);
    animationRun(temper2SkolzSpan);
  } else {
    animationPaused(temper2Skolz);
    animationPaused(temper2SkolzSpan);
  }

  addRowIfRunning(temper2Skolz, 'На 2-ой скользящей, °C');

  const temperGranulHolod = document.querySelector('.temper-granul-holod');
  const temperGranulHolodSpan = document.querySelector('.temper-granul-holod-span');

  if (temperGranulHolod.innerHTML > 70) {
    animationRun(temperGranulHolod);
    animationRun(temperGranulHolodSpan);
  } else {
    animationPaused(temperGranulHolod);
    animationPaused(temperGranulHolodSpan);
  }

  addRowIfRunning(temperGranulHolod, 'Гранул после холод-ка, °C');

  const davlGazPosleSkruber = document.querySelector('.davl-gaz-posle-skruber');
  const davlGazPosleSkruberSpan = document.querySelector('.davl-gaz-posle-skruber-span');
  let davlGazPosleSkruberChanged = davlGazPosleSkruber.innerHTML.replace(',', '.');
  let davlGazPosleSkruberResult = Number(davlGazPosleSkruberChanged);

  if (davlGazPosleSkruberResult > 20) {
    davlGazPosleSkruber.style.animationPlayState = 'running';
    davlGazPosleSkruberSpan.style.animationPlayState = 'running';
  } else {
    davlGazPosleSkruber.style.animationPlayState = 'paused';
    davlGazPosleSkruberSpan.style.animationPlayState = 'paused';
  }

  addRowIfRunning(davlGazPosleSkruber, 'Давление газов после скруббера, кгс/м2');

  const temperTopka = document.querySelector('.temper-topka');
  const temperTopkaSpan = document.querySelector('.temper-topka-span');

  if (temperTopka.innerHTML > 1000) {
    animationRun(temperTopka);
    animationRun(temperTopkaSpan);
  } else {
    animationPaused(temperTopka);
    animationPaused(temperTopkaSpan);
  }

  addRowIfRunning(temperTopka, 'В топке, °C');

  const davlTopka = document.querySelector('.davl-topka');
  const davlTopkaSpan = document.querySelector('.davl-topka-span');
  let davlTopkaChanged = davlTopka.innerHTML.replace(',', '.');
  let davlTopkaResult = Number(davlTopkaChanged);

  if (davlTopkaResult > -1 || davlTopkaResult < -4) {
    davlTopka.style.animationPlayState = 'running';
    davlTopkaSpan.style.animationPlayState = 'running';
  } else {
    davlTopka.style.animationPlayState = 'paused';
    davlTopkaSpan.style.animationPlayState = 'paused';
  }

  addRowIfRunning(davlTopka, 'В топке печи, кгс/м2');

  const temperDoSkruber = document.querySelector('.temper-do-skruber');
  const temperDoSkruberSpan = document.querySelector('.temper-do-skruber-span');

  if (temperDoSkruber.innerHTML > 400) {
    animationRun(temperDoSkruber);
    animationRun(temperDoSkruberSpan);
  } else {
    animationPaused(temperDoSkruber);
    animationPaused(temperDoSkruberSpan);
  }

  addRowIfRunning(temperDoSkruber, 'Температура газов до скруббера, °C');

  const temperPosleSkruber = document.querySelector('.temper-posle-skruber');
  const temperPosleSkruberSpan = document.querySelector('.temper-posle-skruber-span');

  if (temperPosleSkruber.innerHTML > 100) {
    animationRun(temperPosleSkruber);
    animationRun(temperPosleSkruberSpan);
  } else {
    animationPaused(temperPosleSkruber);
    animationPaused(temperPosleSkruberSpan);
  }

  addRowIfRunning(temperPosleSkruber, 'Температура газов после скруббера, °C');

  const temperVihodPechDozhig = document.querySelector('.temper-vihod-pech-dozhig');
  const temperVihodPechDozhigSpan = document.querySelector('.temper-vihod-pech-dozhig-span');

  if (temperVihodPechDozhig.innerHTML > 1200) {
    animationRun(temperVihodPechDozhig);
    animationRun(temperVihodPechDozhigSpan);
  } else {
    animationPaused(temperVihodPechDozhig);
    animationPaused(temperVihodPechDozhigSpan);
  }

  addRowIfRunning(temperVihodPechDozhig, 'На выходе печи дожига, °C');

  const temperGazovKotelUtiliz = document.querySelector('.temper-gazov-kotel-utiliz');
  const temperGazovKotelUtilizSpan = document.querySelector('.temper-gazov-kotel-utiliz-span');

  if (temperGazovKotelUtiliz.innerHTML > 1100) {
    animationRun(temperGazovKotelUtiliz);
    animationRun(temperGazovKotelUtilizSpan);
  } else {
    animationPaused(temperGazovKotelUtiliz);
    animationPaused(temperGazovKotelUtilizSpan);
  }

  addRowIfRunning(temperGazovKotelUtiliz, 'Температура дымовых газов котла-утилизат., °C');

  const razrKotelUtiliz = document.querySelector('.razr-kotel-utiliz');
  const razrKotelUtilizSpan = document.querySelector('.razr-kotel-utiliz-span');
  let razrKotelUtilizChanged = razrKotelUtiliz.innerHTML.replace(',', '.');
  let razrKotelUtilizResult = Number(razrKotelUtilizChanged);

  if (razrKotelUtilizResult > -3 || razrKotelUtilizResult < -12) {
    razrKotelUtiliz.style.animationPlayState = 'running';
    razrKotelUtilizSpan.style.animationPlayState = 'running';
  } else {
    razrKotelUtiliz.style.animationPlayState = 'paused';
    razrKotelUtilizSpan.style.animationPlayState = 'paused';
  }

  addRowIfRunning(razrKotelUtiliz, 'Разрежение в пространстве котла, кгс/м2');

  const temperVodyVannaSkruber = document.querySelector('.temper-vody-vanna-skruber');
  const temperVodyVannaSkruberSpan = document.querySelector('.temper-vody-vanna-skruber-span');

  if (temperVodyVannaSkruber.innerHTML > 90) {
    animationRun(temperVodyVannaSkruber);
    animationRun(temperVodyVannaSkruberSpan);
  } else {
    animationPaused(temperVodyVannaSkruber);
    animationPaused(temperVodyVannaSkruberSpan);
  }

  addRowIfRunning(temperVodyVannaSkruber, 'Температура воды в ванне скруббера, °C');

  const temperKamerVygruz = document.querySelector('.temper-kamer-vygruz');
  const temperKamerVygruzSpan = document.querySelector('.temper-kamer-vygruz-span');

  if (temperKamerVygruz.innerHTML > 750) {
    animationRun(temperKamerVygruz);
    animationRun(temperKamerVygruzSpan);
  } else {
    animationPaused(temperKamerVygruz);
    animationPaused(temperKamerVygruzSpan);
  }

  addRowIfRunning(temperKamerVygruz, 'Температура камеры выгрузки, °C');

  const urovenBarabanKotla = document.querySelector('.uroven-v-barabane-kotla-mnemo-val');
  const urovenBarabanKotlaSpan = document.querySelector('.uroven-v-barabane-kotla-mnemo-val-span');

  if (urovenBarabanKotla.innerHTML <= -70 || urovenBarabanKotla.innerHTML >= 70) {
    animationRun(urovenBarabanKotla);
    animationRun(urovenBarabanKotlaSpan);
  } else {
    animationPaused(urovenBarabanKotla);
    animationPaused(urovenBarabanKotlaSpan);
  }

  addRowIfRunning(urovenBarabanKotla, 'Уровень в барабане котла, мм');

  const urovenVannaSkrubber = document.querySelector('.uroven-vanne-skrubber-value');
  const urovenVannaSkrubberSpan = document.querySelector('.uroven-vanne-skrubber-value-span');

  if (urovenVannaSkrubber.innerHTML <= 250) {
    animationRun(urovenVannaSkrubber);
    animationRun(urovenVannaSkrubberSpan);
  } else {
    animationPaused(urovenVannaSkrubber);
    animationPaused(urovenVannaSkrubberSpan);
  }

  addRowIfRunning(urovenVannaSkrubber, 'Уровень в ванне скруббера, мм');

  const urovenVodyHvo = document.querySelector('.uroven-vody-hvo-value');
  const urovenVodyHvoSpan = document.querySelector('.uroven-vody-hvo-value-span');

  if (urovenVodyHvo.innerHTML <= 1500) {
    animationRun(urovenVodyHvo);
    animationRun(urovenVodyHvoSpan);
  } else {
    animationPaused(urovenVodyHvo);
    animationPaused(urovenVodyHvoSpan);
  }

  addRowIfRunning(urovenVodyHvo, 'Уровень воды в емкости ХВО, мм');
}

const trs = tableTbody.querySelectorAll('tr');
if (trs.length == 0) {
  const noDataRow = `
  <tr class="table__tr">
    <td class="table__td table__left table__td--descr" colspan="2">Тут будут отображаться параметры
        которые превышают допустимые значения</td>
  </tr>
  `;
  tableTbody.innerHTML = noDataRow;
  sirenAnimation.classList.add('siren-off');
}

//Краны
const kran = document.querySelector('.mnemo__kran-img img');
const kranLeft1 = document.querySelector('.mnemo__kran1-left');
const kranRight1 = document.querySelector('.mnemo__kran1-right');

const kranBorderLeft = (param, color) => {
  param.style = `border-left: 13px solid ${color}`;
};

const kranBorderRight = (param, color) => {
  param.style = `border-right: 13px solid ${color}`;
};

const green = 'green';
const red = 'red';

if (kran.src == 'http://techsite4/KASKAD/pic/images/true.gif') {
  kranBorderLeft(kranLeft1, green);
  kranBorderRight(kranRight1, green);
} else {
  kranBorderLeft(kranLeft1, red);
  kranBorderRight(kranRight1, red);
}

const kran2 = document.querySelector('.mnemo__kran2-img img');
const kranLeft2 = document.querySelector('.mnemo__kran2-left');
const kranRight2 = document.querySelector('.mnemo__kran2-right');

if (kran2.src == 'http://techsite4/KASKAD/pic/images/true.gif') {
  kranLeft2.style = `border-left: 12px solid green`;
  kranRight2.style = `border-right: 12px solid green`;
} else {
  kranLeft2.style = `border-left: 12px solid red`;
  kranRight2.style = `border-right: 12px solid red`;
}

const kran3 = document.querySelector('.mnemo__kran3-img img');
const kranLeft3 = document.querySelector('.mnemo__kran3-left');
const kranRight3 = document.querySelector('.mnemo__kran3-right');

if (kran3.src == 'http://techsite4/KASKAD/pic/images/true.gif') {
  kranBorderLeft(kranLeft3, green);
  kranBorderRight(kranRight3, green);
} else {
  kranBorderLeft(kranLeft3, red);
  kranBorderRight(kranRight3, red);
}

const kran4 = document.querySelector('.mnemo__kran4-img img');
const kranLeft4 = document.querySelector('.mnemo__kran4-left');
const kranRight4 = document.querySelector('.mnemo__kran4-right');

if (kran4.src == 'http://techsite4/KASKAD/pic/images/true.gif') {
  kranBorderLeft(kranLeft4, green);
  kranBorderRight(kranRight4, green);
} else {
  kranBorderLeft(kranLeft4, red);
  kranBorderRight(kranRight4, red);
}

const pech1im = document.querySelector('.im5-pech1-value');
const kranLeft5 = document.querySelector('.mnemo__kran5-left');
const kranRight5 = document.querySelector('.mnemo__kran5-right');

if (pech1im) {
  if (Number(pech1im.innerHTML >= 5)) {
    kranBorderLeft(kranLeft5, green);
    kranBorderRight(kranRight5, green);
  } else {
    kranBorderLeft(kranLeft5, red);
    kranBorderRight(kranRight5, red);
  }
}

const pech2im = document.querySelector('.im5-pech2-value');
const kranLeft6 = document.querySelector('.mnemo__kran6-left');
const kranRight6 = document.querySelector('.mnemo__kran6-right');

if (pech2im) {
  if (Number(pech2im.innerHTML >= 5)) {
    kranBorderLeft(kranLeft6, green);
    kranBorderRight(kranRight6, green);
  } else {
    kranBorderLeft(kranLeft6, red);
    kranBorderRight(kranRight6, red);
  }
}

//ventilator
const ventilatorGif2 = document.querySelector('.mnemo__gif-2 img');

if (ventilatorGif2.src == 'http://techsite4/KASKAD/pic/images/ventilator.png') {
  ventilatorGif2.style.animationPlayState = 'running';
} else {
  ventilatorGif2.style.animationPlayState = 'pause';
}

//tooltips
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

// --------------------Модальное окно--------------------

// const btnModal = document.querySelector('.btn-modal');
// const modalBackground = document.querySelector('.modal-js');
// const modalClose = document.querySelector('.mnemo__modal-close');
// const modalActive = document.querySelector('.mnemo__modal-active');

// const accordionBtn = document.querySelectorAll('.modal__accordion');
// const accordionTitle = document.querySelectorAll('.modal__accordion-title');
// const accordionContent = document.querySelectorAll('.modal__accordion-content');

// btnModal.addEventListener('click', () => {
//   modalBackground.classList.add('enabled');
//   modalActive.classList.add('enabled');
// });

// modalClose.addEventListener('click', () => {
//   modalBackground.classList.remove('enabled');
//   modalActive.classList.remove('enabled');
// });

// modalBackground.addEventListener('click', (event) => {
//   if (event.target === modalBackground) {
//     modalBackground.classList.remove('enabled');
//     modalActive.classList.remove('enabled');
//   }
// });

// const dropDownDescrNull = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     const el = array[i];
//     el.style.maxHeight = null;
//   }
// };

// for (let i = 0; i < accordionTitle.length; i++) {
//   const el = accordionTitle[i];

//   el.addEventListener('click', (e) => {
//     e.preventDefault();
//     let contentNext = el.nextElementSibling;

//     if (contentNext.style.maxHeight) {
//       dropDownDescrNull(accordionContent);
//     } else {
//       dropDownDescrNull(accordionContent);
//       contentNext.style.maxHeight = contentNext.scrollHeight + 'px';
//     }

//     if (!el.classList.contains('enabled')) {
//       for (let i = 0; i < accordionTitle.length; i++) {
//         let item = accordionTitle[i];
//         item.classList.remove('enabled');
//       }
//       el.classList.add('enabled');
//     } else {
//       el.classList.remove('enabled');
//     }
//   });
// }

// Password

// const downloadPassword1 = document.querySelector('.download-password-1');
// const windowPassword1 = document.querySelector('.password-window-1');
// const formPassword1 = document.querySelector('.password-form-1');
// const passwordMK500 = 'pechVR';
// const downloadContent1 = document.querySelector('.download-content-1');
// const passwordLabel1 = document.querySelector('.password-label-1');
// const passwordInput1 = document.querySelector('.password-input-1');

// const downloadForm = (downloadPassword, passwordWindow, form) => {
//   downloadPassword.addEventListener('click', (e) => {
//     e.preventDefault();
//     downloadPassword.classList.add('active');
//     passwordWindow.classList.add('active');
//     form.classList.add('active');
//   });
// };

// const formValue = (content, form, passwordWindow, passwordValue, nameInput, labelbox, inputbox) => {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const password = form.querySelector(`[name="password-${nameInput}"]`);
//     const value = {
//       password: password.value,
//     };
//     if (value.password === passwordValue) {
//       passwordWindow.classList.remove('active');
//       content.classList.add('active');
//     } else {
//       labelbox.classList.add('active');
//       inputbox.classList.add('error');
//     }
//   });
// };

// downloadForm(downloadPassword1, windowPassword1, formPassword1);
// formValue(downloadContent1, formPassword1, windowPassword1, passwordMK500, 1, passwordLabel1, passwordInput1);

// const downloadPassword2 = document.querySelector('.download-password-2');
// const windowPassword2 = document.querySelector('.password-window-2');
// const formPassword2 = document.querySelector('.password-form-2');
// const passwordDelta = 'pechVR';
// const downloadContent2 = document.querySelector('.download-content-2');
// const passwordLabel2 = document.querySelector('.password-label-2');
// const passwordInput2 = document.querySelector('.password-input-2');

// downloadForm(downloadPassword2, windowPassword2, formPassword2);
// formValue(downloadContent2, formPassword2, windowPassword2, passwordDelta, 2, passwordLabel2, passwordInput2);
