// ===== FUNDO MATRIX =====

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let matrixWidth = 0;
let matrixHeight = 0;

const chars = '01';
const fontSize = 14;

let drops = [];

function resizeMatrix() {

  matrixWidth = canvas.width = window.innerWidth;
  matrixHeight = canvas.height = window.innerHeight;

  drops = Array.from(
    { length: Math.ceil(matrixWidth / fontSize) },
    () => Math.random() * -20
  );

}

function drawMatrix() {

  ctx.fillStyle = 'rgba(5, 8, 6, 0.08)';
  ctx.fillRect(0, 0, matrixWidth, matrixHeight);

  ctx.fillStyle = '#00e86b';
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, i) => {

    const char =
      chars[Math.floor(Math.random() * chars.length)];

    ctx.fillText(
      char,
      i * fontSize,
      y * fontSize
    );

    if (
      y * fontSize > matrixHeight &&
      Math.random() > 0.975
    ) {
      drops[i] = 0;
    }

    drops[i] += 1;

  });

}

resizeMatrix();

window.addEventListener(
  'resize',
  resizeMatrix
);

setInterval(
  drawMatrix,
  55
);


// ===== ELEMENTOS =====

const grid =
  document.getElementById('grid');

const button =
  document.getElementById('generateBtn');

const bettingHouse =
  document.getElementById('bettingHouse');

const selectedHouse =
  document.getElementById('selectedHouse');

const houseMessage =
  document.getElementById('houseMessage');

const mineCount =
  document.getElementById('mineCount');

const riskDisplay =
  document.getElementById('riskDisplay');

const bettingSite =
  document.getElementById('bettingSite');

const bettingFrame =
  document.getElementById('bettingFrame');

const bettingSiteName =
  document.getElementById('bettingSiteName');


// ===== GRID =====

function createGrid() {

  grid.innerHTML = '';

  for (let i = 0; i < 25; i++) {

    const cell =
      document.createElement('div');

    cell.className = 'cell';

    cell.textContent = '◆';

    grid.appendChild(cell);

  }

}


// ===== RISCO =====

function updateRisk() {

  const mines =
    Number(mineCount.value);

  const risks = {

    1: 'Risco baixo',

    2: 'Risco moderado',

    3: 'Risco médio',

    4: 'Risco alto',

    5: 'Risco muito alto'

  };

  riskDisplay.textContent =
    risks[mines];

}

mineCount.addEventListener(
  'change',
  updateRisk
);


// ===== CONTADOR: 2 MINUTOS =====

let time = 120;

let interval = null;

let signalActive = false;


function updateTimer() {

  const minutes =
    String(Math.floor(time / 60))
      .padStart(2, '0');

  const seconds =
    String(time % 60)
      .padStart(2, '0');

  document.getElementById('timer')
    .textContent =
      `${minutes}:${seconds}`;

}


function startTimer() {

  clearInterval(interval);

  time = 120;

  updateTimer();

  interval = setInterval(() => {

    time--;

    updateTimer();

    if (time <= 0) {

      clearInterval(interval);

      signalActive = false;

      button.disabled = false;

      button.textContent =
        'GERAR NOVO SINAL';

    }

  }, 1000);

}


// ===== CASA DE APOSTA =====

bettingHouse.addEventListener('change', () => {

  const selectedOption =
    bettingHouse.options[
      bettingHouse.selectedIndex
    ];

  const name =
    selectedOption.textContent.trim();

  const url =
    selectedOption.dataset.url;


  // Atualiza informações da casa

  selectedHouse.textContent =
    name;

  houseMessage.textContent =
    `Casa selecionada: ${name}`;

  houseMessage.classList.add('ok');


  // Libera o botão para gerar o sinal

  if (!signalActive) {

    button.disabled = false;

    button.textContent =
      'GERAR SINAL';

  }


  // ==========================================
  // MOSTRAR CASA DENTRO DA PRÓPRIA MATRIX IA
  // ==========================================

  if (url && url !== '#') {

    // Mostra a área da casa

    bettingSite.style.display =
      'block';


    // Atualiza o nome da casa

    bettingSiteName.textContent =
      name;


    // Limpa o iframe primeiro

    bettingFrame.src =
      'about:blank';


    // Aguarda a área aparecer antes de carregar o site

    setTimeout(() => {

      bettingFrame.src =
        url;


      // Rola suavemente até a casa

      bettingSite.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }, 100);


  } else {

    // Se a casa não possui URL,
    // esconde a área do site

    bettingSite.style.display =
      'none';

    bettingFrame.src =
      'about:blank';

  }

});


// ===== GERAR SINAL =====

function generateSignal() {

  if (
    signalActive ||
    !bettingHouse.value
  ) {
    return;
  }


  signalActive = true;

  button.disabled = true;

  button.textContent =
    'SINAL EM ANDAMENTO';


  createGrid();


  const cells =
    document.querySelectorAll('.cell');


  const stars =
    new Set();


  // Quantidade escolhida pelo usuário

  const selectedMines =
    Number(mineCount.value);


  // Gera exatamente a quantidade escolhida

  while (
    stars.size < selectedMines
  ) {

    stars.add(
      Math.floor(
        Math.random() * 25
      )
    );

  }


  // Mostra as estrelas

  stars.forEach(index => {

    cells[index]
      .classList.add('star');

    cells[index].textContent =
      '★';

  });


  // Inicia o contador

  startTimer();

}


// ===== BOTÃO =====

button.addEventListener(
  'click',
  generateSignal
);


// ===== NÚMEROS DINÂMICOS =====

let online = 47;

let users = 186;

let signals = 29;

let hits = 87;


function randomDifferent(
  min,
  max,
  current
) {

  let value = current;

  while (
    value === current
  ) {

    value =
      Math.floor(
        Math.random() *
        (max - min + 1)
      ) + min;

  }

  return value;

}


function updateStats() {

  online =
    randomDifferent(
      28,
      69,
      online
    );

  users =
    randomDifferent(
      132,
      249,
      users
    );

  signals =
    randomDifferent(
      16,
      43,
      signals
    );

  hits =
    randomDifferent(
      82,
      94,
      hits
    );


  document.getElementById(
    'onlineCount'
  ).textContent =
    online.toLocaleString('pt-BR');


  document.getElementById(
    'usersCount'
  ).textContent =
    users.toLocaleString('pt-BR');


  document.getElementById(
    'signalsCount'
  ).textContent =
    signals.toLocaleString('pt-BR');


  document.getElementById(
    'hitsCount'
  ).textContent =
    `${hits}%`;

}


setInterval(
  updateStats,
  4500
);

setTimeout(
  updateStats,
  2200
);


// ===== ESTADO INICIAL =====

createGrid();

updateTimer();

updateRisk();

button.disabled = true;

button.textContent =
  'SELECIONE A CASA';


// ===== GARANTIR SITE OCULTO NO INÍCIO =====

if (bettingSite) {

  bettingSite.style.display =
    'none';

}

if (bettingFrame) {

  bettingFrame.src =
    'about:blank';

}