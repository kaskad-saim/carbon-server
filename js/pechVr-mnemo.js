const nizZagrKam = document.querySelector('.razr-niz-zagr-kam');
const nizZagrKamSpan = document.querySelector('.razr-niz-zagr-kam-span');
let nizZagrKamChanged = nizZagrKam.innerHTML.replace(',', '.');
let nizZagrKamResult = Number(nizZagrKamChanged);

const animationRun = (param) => {
  param.style.animationPlayState = 'running';
};

const animationPaused = (param) => {
  param.style.animationPlayState = 'paused';
};

if (nizZagrKamResult > -3 || nizZagrKamResult < -5) {
  animationRun(nizZagrKam);
  animationRun(nizZagrKamSpan);
} else {
  animationPaused(nizZagrKam);
  animationPaused(nizZagrKamSpan);
}

const temperVnizKamerZagruz = document.querySelector('.temper-vniz-kamer-zagruz');
const temperVnizKamerZagruzSpan = document.querySelector('.temper-vniz-kamer-zagruz-span');

if (temperVnizKamerZagruz.innerHTML > 1100 || temperVnizKamerZagruz.innerHTML < 1000) {
  animationRun(temperVnizKamerZagruz);
  animationRun(temperVnizKamerZagruzSpan);
} else {
  animationPaused(temperVnizKamerZagruz);
  animationPaused(temperVnizKamerZagruzSpan);
}

const temperVerhKamerZagruz = document.querySelector('.temper-verh-kamer-zagruz');
const temperVerhKamerZagruzSpan = document.querySelector('.temper-verh-kamer-zagruz-span');

if (temperVerhKamerZagruz.innerHTML > 1000) {
  animationRun(temperVerhKamerZagruz);
  animationRun(temperVerhKamerZagruzSpan);
} else {
  animationPaused(temperVerhKamerZagruz);
  animationPaused(temperVerhKamerZagruzSpan);
}

const temperVhodPechDozhig = document.querySelector('.temper-vhod-pech-dozhig');
const temperVhodPechDozhigSpan = document.querySelector('.temper-vhod-pech-dozhig-span');

if (temperVhodPechDozhig.innerHTML > 1200) {
  animationRun(temperVhodPechDozhig);
  animationRun(temperVhodPechDozhigSpan);
} else {
  animationPaused(temperVhodPechDozhig);
  animationPaused(temperVhodPechDozhigSpan);
}

const temper2Skolz = document.querySelector('.temper-2-skolz');
const temper2SkolzSpan = document.querySelector('.temper-2-skolz-span');

if (temper2Skolz.innerHTML > 700) {
  temper2Skolz.style.animationPlayState = 'running';
  temper2SkolzSpan.style.animationPlayState = 'running';
} else {
  temper2Skolz.style.animationPlayState = 'paused';
  temper2SkolzSpan.style.animationPlayState = 'paused';
}

const temper1Skolz = document.querySelector('.temper-1-skolz');
const temper1SkolzSpan = document.querySelector('.temper-1-skolz-span');

if (temper1Skolz.innerHTML > 700 || temper1Skolz.innerHTML < 550) {
  temper1Skolz.style.animationPlayState = 'running';
  temper1SkolzSpan.style.animationPlayState = 'running';
} else {
  temper1Skolz.style.animationPlayState = 'paused';
  temper1SkolzSpan.style.animationPlayState = 'paused';
}

const temperGranulHolod = document.querySelector('.temper-granul-holod');
const temperGranulHolodSpan = document.querySelector('.temper-granul-holod-span');

if (temperGranulHolod.innerHTML > 70) {
  temperGranulHolod.style.animationPlayState = 'running';
  temperGranulHolodSpan.style.animationPlayState = 'running';
} else {
  temperGranulHolod.style.animationPlayState = 'paused';
  temperGranulHolodSpan.style.animationPlayState = 'paused';
}

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

const temperTopka = document.querySelector('.temper-topka');
const temperTopkaSpan = document.querySelector('.temper-topka-span');

if (temperTopka.innerHTML > 1000) {
  temperTopka.style.animationPlayState = 'running';
  temperTopkaSpan.style.animationPlayState = 'running';
} else {
  temperTopka.style.animationPlayState = 'paused';
  temperTopkaSpan.style.animationPlayState = 'paused';
}

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

const temperDoSkruber = document.querySelector('.temper-do-skruber');
const temperDoSkruberSpan = document.querySelector('.temper-do-skruber-span');

if (temperDoSkruber.innerHTML > 400) {
  temperDoSkruber.style.animationPlayState = 'running';
  temperDoSkruberSpan.style.animationPlayState = 'running';
} else {
  temperDoSkruber.style.animationPlayState = 'paused';
  temperDoSkruberSpan.style.animationPlayState = 'paused';
}

const temperPosleSkruber = document.querySelector('.temper-posle-skruber');
const temperPosleSkruberSpan = document.querySelector('.temper-posle-skruber-span');

if (temperPosleSkruber.innerHTML > 100) {
  temperPosleSkruber.style.animationPlayState = 'running';
  temperPosleSkruberSpan.style.animationPlayState = 'running';
} else {
  temperPosleSkruber.style.animationPlayState = 'paused';
  temperPosleSkruberSpan.style.animationPlayState = 'paused';
}

const temperVihodPechDozhig = document.querySelector('.temper-vihod-pech-dozhig');
const temperVihodPechDozhigSpan = document.querySelector('.temper-vihod-pech-dozhig-span');

if (temperVihodPechDozhig.innerHTML > 1200) {
  temperVihodPechDozhig.style.animationPlayState = 'running';
  temperVihodPechDozhigSpan.style.animationPlayState = 'running';
} else {
  temperVihodPechDozhig.style.animationPlayState = 'paused';
  temperVihodPechDozhigSpan.style.animationPlayState = 'paused';
}

const temperGazovKotelUtiliz = document.querySelector('.temper-gazov-kotel-utiliz');
const temperGazovKotelUtilizSpan = document.querySelector('.temper-gazov-kotel-utiliz-span');

if (temperGazovKotelUtiliz.innerHTML > 1100) {
  temperGazovKotelUtiliz.style.animationPlayState = 'running';
  temperGazovKotelUtilizSpan.style.animationPlayState = 'running';
} else {
  temperGazovKotelUtiliz.style.animationPlayState = 'paused';
  temperGazovKotelUtilizSpan.style.animationPlayState = 'paused';
}

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

const temperVodyVannaSkruber = document.querySelector('.temper-vody-vanna-skruber');
const temperVodyVannaSkruberSpan = document.querySelector('.temper-vody-vanna-skruber-span');

if (temperVodyVannaSkruber.innerHTML > 90) {
  temperVodyVannaSkruber.style.animationPlayState = 'running';
  temperVodyVannaSkruberSpan.style.animationPlayState = 'running';
} else {
  temperVodyVannaSkruber.style.animationPlayState = 'green';
  temperVodyVannaSkruberSpan.style.animationPlayState = 'green';
}

//mode
const modeTitle = document.querySelector('.current-param__subtitle-span');
const temper3Skolz = document.querySelector('.temper-3-skolz');
const temper3SkolzSpan = document.querySelector('.temper-3-skolz-span');

if (temper1Skolz.innerHTML < 550 && temper1Skolz.innerHTML > 50) {
  modeTitle.innerHTML = 'Выход на режим';
  if (temper3Skolz.innerHTML > 750) {
    temper3Skolz.style.animationPlayState = 'running';
    temper3SkolzSpan.style.animationPlayState = 'running';
  } else {
    temper3Skolz.style.animationPlayState = 'paused';
    temper3SkolzSpan.style.animationPlayState = 'paused';
  }
} else if (temper1Skolz.innerHTML > 550) {
  modeTitle.innerHTML = 'Установившийся режим';
  if (temper3Skolz.innerHTML > 400) {
    temper3Skolz.style.animationPlayState = 'running';
    temper3SkolzSpan.style.animationPlayState = 'running';
  } else {
    temper3Skolz.style.animationPlayState = 'paused';
    temper3SkolzSpan.style.animationPlayState = 'paused';
  }
} else {
  modeTitle.innerHTML = 'Печь не работает';
}
//------------------------------------------------------------------
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

const kran5 = document.querySelector('.mnemo__kran5-img img');
const kranLeft5 = document.querySelector('.mnemo__kran5-left');
const kranRight5 = document.querySelector('.mnemo__kran5-right');

if (kran5.src == 'http://techsite4/KASKAD/pic/images/true.gif') {
  kranBorderLeft(kranLeft5, green);
  kranBorderRight(kranRight5, green);
} else {
  kranBorderLeft(kranLeft5, red);
  kranBorderRight(kranRight5, red);
}
