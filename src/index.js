// Customizable maximum question and limit value constants
const limitMin = 1;
const limitMax = 100;
const maxQuessCount = 10;

let randomNumber = Math.floor(Math.random() * limitMax) + limitMin;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

// Show total stats here
const stats = document.querySelector('.stats');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

// Base values for timer
let startTimer = 0;
let stopTimer = 0;
let totalTime = 0;

checkGuess = () => {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {

    // Timer start from first guess
    startTimer = Date.now();

    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += `${userGuess} `;

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();

    // Show total number of guesses and the time spent when the answer is correct
    stats.textContent = 'Total guesses: ' + guessCount + ' Total time: ' + totalTime + 's';

  } else if (guessCount === maxQuessCount) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);

setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);

  //Timer stops when game ends
  stopTimer = Date.now();

  // Total time = stopping time - starting time
  // Total time is converted from milliseconds to seconds by / 1000
  totalTime = (stopTimer - startTimer) / 1000;
};

resetGame = () => {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * limitMax) + limitMin;
};
