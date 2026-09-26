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
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * fontSize, y * fontSize);
    if (y * fontSize > matrixHeight && Math.random() > 0.975) drops[i] = 0;
    drops[i] += 1;
  });
}

resizeMatrix();
window.addEventListener('resize', resizeMatrix);
setInterval(drawMatrix, 55);

// ===== GRID MINES =====
const grid = document.getElementById('grid');
const button = document.getElementById('generateBtn');
const bettingHouse = document.getElementById('bettingHouse');
const selectedHouse = document.getElementById('selectedHouse');
const houseMessage = document.getElementById('houseMessage');

function createGrid() {
  grid.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = '◆';
    grid.appendChild(cell);
  }
}

// ===== CONTADOR: 2 MINUTOS =====
let time = 120;
let interval = null;
let signalActive = false;

function updateTimer() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
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
      button.textContent = 'GERAR NOVO SINAL';
    }
  }, 1000);
}

// ===== CASA DE APOSTA =====
bettingHouse.addEventListener('change', () => {
  const name = bettingHouse.value;
  selectedHouse.textContent = name;
  houseMessage.textContent = `Casa selecionada: ${name}`;
  houseMessage.classList.add('ok');

  if (!signalActive) {
    button.disabled = false;
    button.textContent = 'GERAR SINAL';
  }
});

// ===== GERAR SINAL =====
function generateSignal() {
  if (signalActive || !bettingHouse.value) return;

  signalActive = true;
  button.disabled = true;
  button.textContent = 'SINAL EM ANDAMENTO';

  createGrid();

  const cells = document.querySelectorAll('.cell');
  const stars = new Set();

  while (stars.size < 3) {
    stars.add(Math.floor(Math.random() * 25));
  }

  stars.forEach(index => {
    cells[index].classList.add('star');
    cells[index].textContent = '★';
  });

  startTimer();
}

button.addEventListener('click', generateSignal);

// ===== NÚMEROS DINÂMICOS =====
// Valores menores e com variação aleatória, sem repetir o mesmo número em sequência.
let online = 47;
let users = 186;
let signals = 29;
let hits = 87;

function randomDifferent(min, max, current) {
  let value = current;
  while (value === current) {
    value = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return value;
}

function updateStats() {
  online = randomDifferent(28, 69, online);
  users = randomDifferent(132, 249, users);
  signals = randomDifferent(16, 43, signals);
  hits = randomDifferent(82, 94, hits);

  document.getElementById('onlineCount').textContent =
    online.toLocaleString('pt-BR');

  document.getElementById('usersCount').textContent =
    users.toLocaleString('pt-BR');

  document.getElementById('signalsCount').textContent =
    signals.toLocaleString('pt-BR');

  document.getElementById('hitsCount').textContent = `${hits}%`;
}

// Atualiza em intervalos diferentes para não parecer um contador fixo.
setInterval(updateStats, 4500);
setTimeout(updateStats, 2200);

// ===== ESTADO INICIAL =====
createGrid();
updateTimer();
button.disabled = true;
button.textContent = 'SELECIONE A CASA';
