const gameContainer = document.getElementById('gameContainer');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const restartButton = document.getElementById('restartButton');

let score = 0;
let highScore = 0;
let difficulty = 10; 

function generateGame() {
  gameContainer.innerHTML = '';

  const gridSize = Math.min(3 + Math.floor(score / 5), 6);
  gameContainer.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`;

  const baseHue = Math.floor(Math.random() * 360);
  const baseColor = `hsl(${baseHue}, 70%, 50%)`;

  const oddHue = baseHue + (Math.random() > 0.5 ? difficulty : -difficulty);
  const oddColor = `hsl(${oddHue}, 70%, 50%)`;

  const totalBoxes = gridSize * gridSize;
  const oddBoxIndex = Math.floor(Math.random() * totalBoxes);

  for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.backgroundColor = i === oddBoxIndex ? oddColor : baseColor;

    box.addEventListener('click', () => {
      if (i === oddBoxIndex) {
        score++;
        difficulty = Math.max(2, difficulty - 0.5); 
        scoreDisplay.textContent = `Score: ${score}`;
        generateGame();
      } else {
        if (score > highScore) {
          highScore = score;
          highScoreDisplay.textContent = `High Score: ${highScore}`;
        }
        message.textContent = 'Game Over! 😞';
        gameContainer.innerHTML = ''; 
      }
    });

    gameContainer.appendChild(box);
  }

  message.textContent = 'Can you spot the odd color?';
}

restartButton.addEventListener('click', () => {
  score = 0;
  difficulty = 10; 
  scoreDisplay.textContent = `Score: ${score}`;
  generateGame();
});

generateGame();

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
  body.classList.add('dark-mode');
}

