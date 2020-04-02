export function checkResults(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    else if (player === 'rock' && computer === 'paper'){
        return 'lost';
    }
    else if (player === 'rock' && computer === 'scissors'){
        return 'win';
    }
    else if (player === 'paper' && computer === 'rock'){
        return 'win';
    }
    
    else if (player === 'paper' && computer === 'scissors'){
        return 'lost';
    }
    else if (player === 'scissors' && computer === 'rock'){
        return 'lost';
    }
    else if (player === 'scissors' && computer === 'paper'){
        return 'win';
    }
}