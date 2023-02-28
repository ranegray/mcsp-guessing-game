let userName = prompt("Who's playing?");
let userGuess = prompt("Guess a number between 1 and 10");
let numToGuess = Math.floor(Math.random() * 10) + 1;
let guessArray = [userGuess];
let guessCount = 0;

const user = {}

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
      handleWin();
      newGame();
    }
    handleWin();
    newGame();
  } else {
    alert(`Not even close, ${userName}!`);
    handleGuess();
  }
}

function handleWin() {
    if(user.hasOwnProperty(userName)) {
        if (user[userName] > guessCount) {
            alert(`Correct, ${userName}! And you beat your previous attempt by ${user[userName] - guessCount} fewer guesses.`)
            user[userName] = guessCount;
        }
    } else {
        alert(`Good job, ${userName}! We will remember your score for next time.`)
        user[userName] = guessCount;
    }
}

function handleGuess() {
  userGuess = prompt("Guess again.");
  guessCount++;
  guessArray.push(userGuess);
  checkGuess(userGuess);
}

function reset() {
    numToGuess = Math.floor(Math.random() * 10) + 1;
    guessCount = 0;
    userGuess = prompt("Guess a number between 1 and 10");
    guessArray = [userGuess];
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