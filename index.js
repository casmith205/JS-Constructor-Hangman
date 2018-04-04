// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word.js");



var game = {
    wordBank: ['butterfinger', 'hersheys', 'crunch', 'payday', 'reeses', 'snickers', 'twix', 'toblerone', 'whatchamacallit'],
    currentWord: null,
    startGame: function () {
        console.log("\n\nReady to play Candy Hangman? \nGuess what candy bar I'm craving!");
        console.log("----------------------------\n");
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        this.currentWord.displayWord();
        // ******Why does this not get rid of the commas
        console.log(this.currentWord.lettersShown.join(" "))
        console.log("---------------------------\n")
        // Passing the current word through to the userInteraction functions
        this.userInteraction(this.currentWord);
    },
    userInteraction: function (word) {
        var now = this;
        // if statement to ensure that our questions are only asked five times
        if (word.remainingGuesses > 0 && word.correctLetters !== word.letterArr.length){
            inquirer.prompt([
                {
                    name: "guessPrompt",
                    message: "Guess a letter!"
                }
            ]).then(function (guess) {
                console.log("---------------------------\nYou guesssed: " + guess.guessPrompt);
                // Word = this.currentWord as defined above. Check the guess to see if it matches a letter in the word.
                word.checkGuess(guess.guessPrompt);
                console.log(word.lettersShown.join(" "));
                console.log("\n---------------------------")
                now.userInteraction(word);

            });
        } else {
            if(word.remainingGuesses === 0){
                console.log("\nOh no! Looks like you ran out of guesses. \nThe correct answer was "+this.currentWord.letterArr.join("")+"!");
            } else {
                console.log("\nCongratulations! You got it! The answer was "+this.currentWord.letterArr.join(""));
            };
            this.startGame();
        }
    },
};

game.startGame();