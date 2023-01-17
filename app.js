let words = [
    'javascript',
    'banana',
    'balloon',
    'monkey',
    'coding',
    'mountain',
    'pancake',
    'python',
    'chipmunk',
    'motorcycle'
];


//Pick random word
let word = words[Math.floor(Math.random() * words.length)];


//Set up the answer array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}

let remaingLetters = word.length;


//Game loop
while (remaingLetters > 0) {
    //Show player their progress
    alert(answerArray.join(' '));

    //Get guess from player
    let guess = prompt('Guess a letter or click Cancel to stop');
    
    if (guess === null) {
        //Exit game
        break;
    } else if (guess.length !== 1) {
        alert('Please enter a single letter');
    } else {
        //Update game state with guess
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remaingLetters--;
            }
        }
    }
    //End of game loop
}

//Show answer
alert(answerArray.join(' '));
alert('Great! The answer was ' + word);






