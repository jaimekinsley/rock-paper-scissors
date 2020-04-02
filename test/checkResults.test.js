// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { checkResults } from '../check-result.js';

const test = QUnit.test;

test('player wins with Rock vs Scissors', function(assert) {
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

test('player wins with Scissors vs Paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    const playerThrow = 'scissors';
    const computerThrow = 'paper';
    const expected = 'win';
    const throwOutcome = checkResults(playerThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, throwOutcome);
});

test('player wins with Paper vs Rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    const playerThrow = 'paper';
    const computerThrow = 'rock';
    const expected = 'win';
    const throwOutcome = checkResults(playerThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, throwOutcome);
});

test('player ties with Rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    const playerThrow = 'rock';
    const computerThrow = 'rock';
    const expected = 'draw';
    const throwOutcome = checkResults(playerThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(throwOutcome, expected);
});

test('player ties with Paper', function(assert) {
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

test('player ties with Scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    const playerThrow = 'scissors';
    const computerThrow = 'scissors';
    const expected = 'draw';
    const throwOutcome = checkResults(playerThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(throwOutcome, expected);
});

test('player loses with Rock vs Paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    const playerThrow = 'rock';
    const computerThrow = 'paper';
    const expected = 'lost';
    const throwOutcome = checkResults(playerThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(throwOutcome, expected);
});

test('player loses with Paper vs Scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    const playerThrow = 'paper';
    const computerThrow = 'scissors';
    const expected = 'lost';
    const throwOutcome = checkResults(playerThrow, computerThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(throwOutcome, expected);
});
test('player loses with Scissors vs Rock', function(assert) {
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