let numToGuess = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Guess a number between 1 and 10");

function checkGuess(num) {
  if (num > numToGuess) {
    alert("Lower");
    handleGuess();
  } else if (num < numToGuess) {
    alert("Higher");
    handleGuess();
  } else if (num == numToGuess) {
    alert("Correct!");
  } else {
    alert("Not even close!");
    handleGuess();
  }
}

function handleGuess() {
    userGuess = prompt('Guess again.')
    checkGuess(userGuess);
}

console.log(numToGuess);
console.log( typeof userGuess );
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
