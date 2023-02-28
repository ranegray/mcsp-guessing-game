let userName = prompt("Who's playing?");
let userGuess = prompt("Guess a number between 1 and 10");
let numToGuess = Math.floor(Math.random() * 10) + 1;
let guessArray = [];

function checkGuess(num) {
  console.log(numToGuess);

  if (num > numToGuess) {
    alert(`Try a lower guess, ${userName}`);
    handleGuess();
  } else if (num < numToGuess) {
    alert(`A little bit higher, ${userName}`);
    handleGuess();
  } else if (num == numToGuess) {
    if (guessArray.length < 1) {
      alert(`Holy cow, ${userName}! First try, correct!`);
      newGame();
    }
    alert(`Correct, you tried ${guessArray}.`);
    newGame();
  } else {
    alert(`Not even close, ${userName}!`);
    handleGuess();
  }
}

function handleGuess() {
  userGuess = prompt("Guess again.");
  guessArray.push(userGuess);
  checkGuess(userGuess);
}

function reset() {
    numToGuess = Math.floor(Math.random() * 10) + 1;
    guessArray = [];
    userGuess = prompt("Guess a number between 1 and 10");
}

function newGame() {
  let again = prompt(`${userName}, do you wanna play again?`);
  if (again == "yes" || again == "Yes") {
    reset();
    checkGuess(userGuess);
  } else {
    alert(`See you later then!`);
    return;
  }
}

checkGuess(userGuess);

// const guessBtn = document.querySelector('#send-guess');
// const guessForm = document.querySelector('#guess');
// const result = document.querySelector('#result');
// let guess = 0;

// guessBtn.addEventListener('click', e => {
//     e.preventDefault();
//     guess = guessForm.value;
//     checkGuess(guess);
// })