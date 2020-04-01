// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { checkResults } from '../check-result.js';

const test = QUnit.test;

test('player wins', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    const playerThrow = 'rock';
    const computerThrow = 'scissors';
    const expected = 'win';
    const throwOutcome = checkResults(playerThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, throwOutcome);
});

test('player ties', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    const playerThrow = 'paper';
    const computerThrow = 'paper';
    const expected = 'draw';
    const throwOutcome = checkResults(playerThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(throwOutcome, expected);
});

test('player loses', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    const playerThrow = 'scissors';
    const computerThrow = 'rock';
    const expected = 'lost';
    const throwOutcome = checkResults(playerThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(throwOutcome, expected);
});