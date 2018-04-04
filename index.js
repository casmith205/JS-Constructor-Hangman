// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word.js");

console.log("Ready to play Candy Hangman? \nGuess what candy bar I'm craving!");
console.log("-----------------------------------------");

var game = {
    wordBank: ['Butterfinger', 'Hersheys', 'Crunch', 'Payday', 'Reeses', 'Snickers', 'Twix', 'Toblerone', 'Whatchamacallit', 'Milky Way'],
    remainingGuesses: 10,
    currentWord: null,
    wordGuessed: false,
    startGame: function () {
        // this.resetGuesses();
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        this.currentWord.displayWord();
        this.userInteraction();
    },
    userInteraction: function () {
        // if statement to ensure that our questions are only asked five times
        if (this.remainingGuesses > 0 && !this.wordGuessed) {
            inquirer.prompt([
                {
                    name: "guessPrompt",
                    message: "Guess a letter!"
                }
            ]).then(function (guess) {
                this.currentWord.checkGuess(guess)
            });
        } else {
            // if guesses run out or the word is correctly guessed, console.log a message
        }
    },
};

game.startGame();