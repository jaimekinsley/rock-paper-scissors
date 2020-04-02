export function getRandomThrow(){
    const computerThrow = Math.ceil(Math.random() * 3);
    if (computerThrow === 1){
        return 'rock';
    }
    if (computerThrow === 2){
        return 'paper';
    }
    if (computerThrow === 3){
        return 'scissors';
    }
}

