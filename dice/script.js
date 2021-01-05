// Set some starting variables
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Get dom elements
const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');
const player1ScoreBoard = document.getElementById('player1ScoreBoard');
const player2ScoreBoard = document.getElementById('player2ScoreBoard');
const message = document.getElementById('message');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

// Roll dice
rollBtn.addEventListener('click', rollDice);

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
    message.textContent = 'Player 2 Turn';
  } else {
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove('active');
    player1Dice.classList.add('active');
    message.textContent = 'Player 1 Turn';
  }

  if (player1Score >= 20) {
    message.textContent = 'Player 1 Has Won!';
    showDisplayButton();
  } else if (player2Score >= 20) {
    message.textContent = 'Player 2 Has Won!';
    showDisplayButton();
  }

  // Toggle player1turn to true or false
  player1Turn = !player1Turn;
}

function showDisplayButton() {
  rollBtn.style.display = 'none';
  resetBtn.style.display = 'block';
}

// Reset Game
resetBtn.addEventListener('click', reset);

function reset() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;

  message.textContent = 'Player 1 turn';

  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;

  player1Dice.textContent = '-';
  player2Dice.textContent = '-';

  resetBtn.style.display = 'none';
  rollBtn.style.display = 'block';
  player2Dice.classList.remove('active');
  player1Dice.classList.add('active');
}
