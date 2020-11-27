function addSpinners() {
  const mSize = EL.size.value;
  const mSpeed = 1 / EL.speed.value;
  const mRandom = EL.random.checked ? 1 : 0;
  const mBackground = EL.background.value;
  const mLight = EL.light.value;
  const mDark = EL.dark.value;

  EL.container.innerHTML = '';
  EL.container.style.backgroundColor = `${mBackground}`;

  const numSpinners = (EL.container.offsetHeight * EL.container.offsetWidth) / (4 * mSize * mSize);

  for(let i = 0; i < 1.2 * numSpinners; i++) {
    const nS = document.createElement('div');
    nS.classList.add('loader');
    nS.style.animationDuration = `${mSpeed}s`;
    nS.style.width = `${mSize}px`;
    nS.style.height = `${mSize}px`;
    nS.style.margin = `${mSize / 4}px`;
    nS.style.borderWidth = `${mSize / 4}px`;
    nS.style.borderColor = `${mLight}`;
    nS.style.borderTopColor = `${mDark}`;
    nS.style.animationDelay = `${-1.2 * mRandom * Math.random()}s`;
    EL.container.appendChild(nS);
  }  
}

const EL = {};
const STYLE = {};

window.addEventListener('load', () => {
  EL.container = document.getElementById('my-container');
  EL.menu = document.getElementById('my-menu-container');
  EL.size = document.getElementById('my-size');
  EL.speed = document.getElementById('my-speed');
  EL.random = document.getElementById('my-random');
  EL.background = document.getElementById('my-color-background');
  EL.light = document.getElementById('my-color-light');
  EL.dark = document.getElementById('my-color-dark');

  STYLE.menuWidth = parseInt(EL.menu.offsetWidth);

  addSpinners();

  window.addEventListener('keyup', (e) => {
    if (e.code === 'KeyM') {
      EL.menu.style.left = (parseInt(EL.menu.style.left) < 0) ? '0' : `${-1.1 * STYLE.menuWidth}px`;
    }
  });

  Array.from(document.getElementsByTagName('input')).forEach(e => {
    e.addEventListener('change', addSpinners);
  });
});
