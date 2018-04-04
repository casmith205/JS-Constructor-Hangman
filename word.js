var Letter = require("./letter.js");

// Defining the constructor for a word 
var Word = function (word) {
    // Splits the string into an array of letters
    this.letterArr = Array.from(word);
    // Takes the array of letters and interprets what is shown (placeholder or underlying)
    this.lettersShown = [];
    // Counting how many letters are correct
    this.correctLetters = 0;
    // Function to take each letter in the letterArr and push determine what to show on the screen.
    this.displayWord = function () {
        for (i = 0; i < this.letterArr.length; i++) {
            var newLetter = new Letter(this.letterArr[i]);
            this.lettersShown.push(newLetter.shown);
        };
    };
    // Takes in the user guess
    this.checkGuess = function (x) {
        for (i = 0; i < this.letterArr.length; i++) {
            var newLetter = new Letter(this.letterArr[i]);
            // Check each letter to see if the guess matches the underlying values
            newLetter.checkLetter(x);
            // If it was guessed correctly, splice it into the array and increment correct letters
            if (newLetter.guessed) {
                this.lettersShown.splice(i, 1, (newLetter.shown));
                this.correctLetters++;
                console.log(this.correctLetters);
            };
        };
    };
};

module.exports = Word;
