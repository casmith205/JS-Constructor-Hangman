var Letter = require("./letter.js");

// Defining the constructor for a word 
var Word = function (word) {
    // Splits the string into an array of letters
    this.letterArr = Array.from(word);
    // Takes the array of letters and interprets what is shown (placeholder or underlying)
    this.lettersShown = [];
    // Function to take each letter in the letterArr and push determine what to show on the screen.
    this.displayWord = function (){
        for (i = 0; i < this.letterArr.length; i++) {
            var newLetter = new Letter(this.letterArr[i]);
            this.lettersShown.push(newLetter.shown);
        };
    };
    // Takes in the user guess
    this.checkGuess = function (x) {
        for (i = 0; i < this.letterArr.length; i++) {
            // creating a new letter every time I need to check for a letter which isnt right but cnat figure out what to do*****
            var newLetter = new Letter(this.letterArr[i]);
            newLetter.checkLetter(x);
            if(newLetter.guessed){
                this.lettersShown.splice(i, 1, (newLetter.shown));
            };
        };
    };
};

module.exports = Word;


