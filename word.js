var Letter = require("./letter.js");

// Defining the constructor for a word 
var Word = function (word) {
    // Splits the string into an array of letters
    this.letterArr = Array.from(word);
    // Takes the array of letters and interprets what is shown (placeholder or underlying)
    this.lettersShown = [];
    // Counting how many letters are correct
    this.correctLetters = 0;
    // Documenting how many guesses are remaining
    this.remainingGuesses = 10;
    // Dummy variable for incorrect letters
    this.incorrectLetters = 0;
    // Function to take each letter in the letterArr and push determine what to show on the screen.
    this.displayWord = function () {
        for (i = 0; i < this.letterArr.length; i++) {
            var newLetter = new Letter(this.letterArr[i]);
            this.lettersShown.push(newLetter.shown);
        };
    };
    // Takes in the user guess
    this.checkGuess = function (x) {
        // Before the letter is being checked, reset the incorrectLetter value
        this.incorrectLetters=0;
        for (i = 0; i < this.letterArr.length; i++) {
            var newLetter = new Letter(this.letterArr[i]);
            // Check each letter to see if the guess matches the underlying values
            newLetter.checkLetter(x);
            // If it was guessed correctly, splice it into the array and increment correct letters
            if (newLetter.guessed) {
                this.lettersShown.splice(i, 1, (newLetter.shown));
                this.correctLetters++;
            } 
            else {
                // Increase the incorrect letter count for each letter that doesn't match the guess
                this.incorrectLetters++;
            };
        };
        // If there were no correct letters (incorrect letters match the length of the array), decrease the remainng guesses
        // Functions this way because correct letters don't reset--this is easier to track within this function
        if (this.incorrectLetters ===this.letterArr.length) {
            this.remainingGuesses --;
        };
        console.log("\nYou have "+this.remainingGuesses+" guesses remaining!\n"); 
    };
};

module.exports = Word;
