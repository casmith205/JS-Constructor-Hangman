// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word.js");

console.log("Ready to play Candy Hangman? \nGuess what candy bar I'm craving!");
console.log("-----------------------------------------");

var game = {
    wordBank: ['butterfinger', 'hersheys', 'crunch', 'payday', 'reeses', 'snickers', 'twix', 'toblerone', 'whatchamacallit'],
    remainingGuesses: 10,
    currentWord: null,
    wordGuessed: false,
    startGame: function () {
        // this.resetGuesses();
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
        if (this.remainingGuesses > 0 && !this.wordGuessed) {
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
                // **********SPLICE ISN'T WORKING TO CONTINUALLY REPLACE LETTERS
            });
        } else {
            // if guesses run out or the word is correctly guessed, console.log a message
        }
    },
};

game.startGame();