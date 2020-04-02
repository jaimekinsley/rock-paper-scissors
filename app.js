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
const beer = document.getElementById('beer');

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
        winsSpan.textContent = wins;
        beer.innerHTML = 'You Won! <img src="https://www.athensinsider.com/wp-content/uploads/2018/07/beer-900x600.jpg" alt="cheers">';
        

        // youWonDiv.style.display = 'block';
    }
    
    else if (whoWon === 'lost'){
        losses++;
        lossesSpan.textContent = losses;
        beer.innerHTML = 'You Lose :( <img src="https://cdn.craftbeer.com/wp-content/uploads/2016/02/21195019/spilled.jpg" alt="spilled beer">';

        // youLostDiv.style.display = 'block';
    }    

    else if (whoWon === 'draw'){
        draws++;
        drawsSpan.textContent = draws;
        beer.innerHTML = 'It\'s a Draw <img src="https://manofmany.com/wp-content/uploads/2019/10/Beer-Sizes-Explained.jpg" alt="beer in glass">';

        // youDrawDiv.style.display = 'block';
    }    

    console.log({ wins, losses, draws });

});

resetButton.addEventListener ('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;

    winsSpan.textContent = '';
    lossesSpan.textContent = '';
    drawsSpan.textContent = '';

    beer.innerHTML = '';
    resultsDiv.textContent = '';
});
