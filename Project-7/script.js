let randomNumber = Math.floor((Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let palyGame = true;

if (palyGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number");
    }
    else if (guess < 1) {
        alert("please enter a number more than 1");
    }
    else if (guess > 100) {
        alert("please enter a number less than 100");
    } else {
        prevGuess.push(guess);
        if (numGuess >= 10) {
            dispalyGuess(guess);
            dispalyMassage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            dispalyGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {
    if (guess === randomNumber) {
        dispalyMassage(`You guessed it right`);
        endGame();
    }
    else if (guess < randomNumber) {
        dispalyMassage(`Number is Too low`);
    }
    else if (guess > randomNumber) {
        dispalyMassage(`Number is Too high`);
    }
}

function dispalyGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

}

function dispalyMassage(massage) {
    lowOrHigh.innerHTML = `<h2>${massage}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    p.style.color = "black";
    startOver.appendChild(p);
    palyGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function (e) {
        randomNumber = Math.floor((Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        palyGame = true;
    })
}
