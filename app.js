// GET
// import some functions
import { getRandomThrow } from './get-random-throw.js';
import { checkResults } from './check-result.js';

// grab some HTML elements
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const drawsSpan = document.getElementById('draws');
const computerChose = document.getElementById('computer-throw');
const resultsDiv = document.getElementById('results');
const youWonDiv = document.getElementById('you-won');
const youLostDiv = document.getElementById('you-lost');
const youDrawDiv = document.getElementById('you-draw');

// INITIALIZE
// set some state data
let wins = 0;
let losses = 0;
let draws = 0;

// add some event listeners
playButton.addEventListener ('click', () => {

    // get the checked radio button
    const selectedChoice = document.querySelector('input[type=radio]:checked');

    // figure out what the player selected
    let userThrow = selectedChoice.value;

    // get computer's throw
    let computerThrow = getRandomThrow();

    // calculate winner
    const whoWon = checkResults(userThrow, computerThrow);
    console.log(whoWon);

    computerChose.textContent = computerThrow;
    resultsDiv.style.display = 'block';
    

    if (whoWon === 'win'){
        wins++;
        youWonDiv.style.display = 'block';
    }
    
    else if (whoWon === 'lost'){
        losses++;
        youLostDiv.style.display = 'block';
    }    

    else if (whoWon === 'draw'){
        draws++;
        youDrawDiv.style.display = 'block';
    }    

});

