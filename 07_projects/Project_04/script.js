let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const userInput = document.getElementById('guessField');
const submit = document.getElementById('subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let guessRemaining = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess > 100) {
    alert('please enter number less than 100');
  } else if (guess < 1) {
    alert('please enter number greater than 1');
  } else {
    prevGuess.push(guess);
    if (guessRemaining === 11) {
      clearGuess(guess);
      displayMessage(`GameOver, the random number ${randomNumber}`);
      endGame();
    } else {
      clearGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Congratulations, You have guessed the correct number');
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(' Numer is too big');
  } else if (guess < randomNumber) {
    displayMessage('Number is too small');
  }
}

function clearGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  guessRemaining++;
  // console.log(guessRemaining);
  remaining.innerHTML = `${11 - guessRemaining}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput = '';
  userInput.setAttribute('disabled', '');
  playGame = false;
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start a new game</h2>';
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    // console.log(e);
    // console.log(e.target);
    guessRemaining = 1;
    prevGuess = [];

    
  });
}