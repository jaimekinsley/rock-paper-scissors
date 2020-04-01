export function checkResults(player, computer) {
    if (player === 'rock' && computer === 'rock'){
        return 'draw';
    }
    if (player === 'rock' && computer === 'paper'){
        return 'lost';
    }
    if (player === 'rock' && computer === 'scissors'){
        return 'win';
    }
    if (player === 'paper' && computer === 'rock'){
        return 'win';
    }
    if (player === 'paper' && computer === 'paper'){
        return 'draw';
    }
    if (player === 'paper' && computer === 'scissors'){
        return 'lost';
    }
    if (player === 'scissors' && computer === 'rock'){
        return 'lost';
    }
    if (player === 'scissors' && computer === 'paper'){
        return 'win';
    }
    if (player === 'scissors' && computer === 'scissors'){
        return 'draw';
    }
}