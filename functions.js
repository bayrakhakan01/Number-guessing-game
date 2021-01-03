let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const rNum = document.querySelector('.rNum');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) { 
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent ='';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        rNum.textContent = `Correct number: ${randomNumber}`;
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber - 10) {
          lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess < randomNumber && userGuess >= randomNumber - 10) {
          lowOrHi.textContent = 'Last guess was low!';
        } else if(userGuess > randomNumber - 10) {
          lowOrHi.textContent = 'Last guess was too high!';
        } else if(userGuess > randomNumber && userGuess <= randomNumber - 10) {
          lowOrHi.textContent = 'Last guess was high!';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

// with enter key
guessField.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        guessSubmit.click(checkGuess);
        guessSubmit.addEventListener('click', checkGuess);
    }
})
// without enter key



function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

randomNumber = Math.floor(Math.random() * 100) + 1;
}