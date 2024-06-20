//mode
const modeTitle = document.querySelector('.current-param__subtitle-span');
const temper3Skolz = document.querySelector('.temper-3-skolz');
const temper1Skolz = document.querySelector('.temper-1-skolz');

if (temper1Skolz.innerHTML < 550 && temper1Skolz.innerHTML > 50) {
  modeTitle.innerHTML = 'Выход на режим';
  if (temper3Skolz.innerHTML > 750) {
    temper3Skolz.style.animationPlayState = 'running';
  } else {
    temper3Skolz.style.animationPlayState = 'paused';
  }
} else if (temper1Skolz.innerHTML > 550) {
  modeTitle.innerHTML = 'Установившийся режим';
  if (temper3Skolz.innerHTML > 400) {
    temper3Skolz.style.animationPlayState = 'running';
  } else {
    temper3Skolz.style.animationPlayState = 'paused';
  }
} else {
  modeTitle.innerHTML = 'Печь не работает';
}
//------------------------------------------------------------------

// условия по параметрам
if (temper1Skolz.innerHTML > 50) {
  if (temper1Skolz.innerHTML > 700 || temper1Skolz.innerHTML < 550) {
    temper1Skolz.style.animationPlayState = 'running';
  } else {
    temper1Skolz.style.animationPlayState = 'paused';
  }

  const temperTopka = document.querySelector('.temper-topka');
  if (temperTopka.innerHTML > 1000) {
    temperTopka.style.animationPlayState = 'running';
  } else {
    temperTopka.style.animationPlayState = 'paused';
  }

  const temper2Skolz = document.querySelector('.temper-2-skolz');

  if (temper2Skolz.innerHTML > 700) {
    temper2Skolz.style.animationPlayState = 'running';
  } else {
    temper2Skolz.style.animationPlayState = 'paused';
  }

  const temperVnizKamerZagruz = document.querySelector('.temper-vniz-kamer-zagruz');

  if (temperVnizKamerZagruz.innerHTML > 1100 || temperVnizKamerZagruz.innerHTML < 1000) {
    temperVnizKamerZagruz.style.animationPlayState = 'running';
  } else {
    temperVnizKamerZagruz.style.animationPlayState = 'paused';
  }

  const temperVerhKamerZagruz = document.querySelector('.temper-verh-kamer-zagruz');

  if (temperVerhKamerZagruz.innerHTML > 1000) {
    temperVerhKamerZagruz.style.animationPlayState = 'running';
  } else {
    temperVerhKamerZagruz.style.animationPlayState = 'paused';
  }

  const temperGranulHolod = document.querySelector('.temper-granul-holod');

  if (temperGranulHolod.innerHTML > 70) {
    temperGranulHolod.style.animationPlayState = 'running';
  } else {
    temperGranulHolod.style.animationPlayState = 'paused';
  }

  const temperVhodPechDozhig = document.querySelector('.temper-vhod-pech-dozhig');

  if (temperVhodPechDozhig.innerHTML > 1200) {
    temperVhodPechDozhig.style.animationPlayState = 'running';
  } else {
    temperVhodPechDozhig.style.animationPlayState = 'paused';
  }

  const temperVihodPechDozhig = document.querySelector('.temper-vihod-pech-dozhig');

  if (temperVihodPechDozhig.innerHTML > 1200) {
    temperVihodPechDozhig.style.animationPlayState = 'running';
  } else {
    temperVihodPechDozhig.style.animationPlayState = 'paused';
  }

  const davlTopka = document.querySelector('.davl-topka');
  let davlTopkaChanged = davlTopka.innerHTML.replace(',', '.');
  let davlTopkaResult = Number(davlTopkaChanged);

  if (davlTopkaResult > -1 || davlTopkaResult < -4) {
    davlTopka.style.animationPlayState = 'running';
  } else {
    davlTopka.style.animationPlayState = 'paused';
  }

  const nizZagrKam = document.querySelector('.razr-niz-zagr-kam');
  let nizZagrKamChanged = nizZagrKam.innerHTML.replace(',', '.');
  let nizZagrKamResult = Number(nizZagrKamChanged);

  if (nizZagrKamResult > -3 || nizZagrKamResult < -5) {
    nizZagrKam.style.animationPlayState = 'running';
  } else {
    nizZagrKam.style.animationPlayState = 'paused';
  }

  const temperDoSkruber = document.querySelector('.temper-do-skruber');

  if (temperDoSkruber.innerHTML > 400) {
    temperDoSkruber.style.animationPlayState = 'running';
  } else {
    temperDoSkruber.style.animationPlayState = 'paused';
  }

  const temperPosleSkruber = document.querySelector('.temper-posle-skruber');

  if (temperPosleSkruber.innerHTML > 100) {
    temperPosleSkruber.style.animationPlayState = 'running';
  } else {
    temperPosleSkruber.style.animationPlayState = 'paused';
  }

  const temperVodyVannaSkruber = document.querySelector('.temper-vody-vanna-skruber');

  if (temperVodyVannaSkruber.innerHTML > 90) {
    temperVodyVannaSkruber.style.animationPlayState = 'running';
  } else {
    temperVodyVannaSkruber.style.animationPlayState = 'paused';
  }

  const davlGazPosleSkruber = document.querySelector('.davl-gaz-posle-skruber');
  let davlGazPosleSkruberChanged = davlGazPosleSkruber.innerHTML.replace(',', '.');
  let davlGazPosleSkruberResult = Number(davlGazPosleSkruberChanged);

  if (davlGazPosleSkruberResult > 20) {
    davlGazPosleSkruber.style.animationPlayState = 'running';
  } else {
    davlGazPosleSkruber.style.animationPlayState = 'paused';
  }

  const temperGazovKotelUtiliz = document.querySelector('.temper-gazov-kotel-utiliz');

  if (temperGazovKotelUtiliz.innerHTML > 1100) {
    temperGazovKotelUtiliz.style.animationPlayState = 'running';
  } else {
    temperGazovKotelUtiliz.style.animationPlayState = 'paused';
  }

  const razrKotelUtiliz = document.querySelector('.razr-kotel-utiliz');
  let razrKotelUtilizChanged = razrKotelUtiliz.innerHTML.replace(',', '.');
  let razrKotelUtilizResult = Number(razrKotelUtilizChanged);

  if (razrKotelUtilizResult > -3 || razrKotelUtilizResult < -12) {
    razrKotelUtiliz.style.animationPlayState = 'running';
  } else {
    razrKotelUtiliz.style.animationPlayState = 'paused';
  }
}
