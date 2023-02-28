const guessBtn = document.querySelector('#send-guess');
const guessForm = document.querySelector('#guess');
const result = document.querySelector('#result');
let numToGuess = Math.floor(Math.random() * 10)
let guess = 0;

guessBtn.addEventListener('click', e => {
    e.preventDefault();
    guess = guessForm.value;
    checkGuess(guess);
})

function checkGuess(num) {
    if (num > numToGuess){
        result.textContent = 'Lower'
    } else if (num < numToGuess){
        result.textContent = 'Higher'
    } else {
        result.textContent = 'Correct!'
    }
}

// prompt('Guess a number between 1 and 10')