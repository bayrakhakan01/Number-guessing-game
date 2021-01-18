let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const rNum = document.querySelector('.rNum');
const sec = document.querySelector('section');

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
        lastResult.style.backgroundColor = 'rgb(159, 238, 40)';
        lastResult.style.textShadow = '5px 2px 4px blue';
        lastResult.style.fontSize = '180%';
        sec.style.backgroundColor = 'rgb(159, 238, 40)';
        lowOrHi.textContent ='';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        rNum.textContent = `Correct number: ${randomNumber}`;
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.fontSize = '150%';
        lastResult.align = 'center';
        lastResult.style.backgroundColor = 'rgb(158, 20, 20)';
        if(userGuess < randomNumber - 10) {
          lowOrHi.textContent = 'Last guess was way too low!';
        } else if(userGuess < randomNumber && userGuess >= randomNumber - 10) {
          lowOrHi.textContent = 'Last guess was still low!';
        } else if(userGuess > randomNumber - 10) {
          lowOrHi.textContent = 'Last guess was way too high!';
        } else if(userGuess > randomNumber && userGuess <= randomNumber - 10) {
          lowOrHi.textContent = 'Last guess was still high!';
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
        guessSubmit.addEventListener('click', checkGuess); // you can use this single code line without enter key
    }
})


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

    lastResult.style.backgroundColor = ' rgb(168, 211, 247)';
    sec.style.backgroundColor = 'rgb(168, 211, 247)';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
