// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word.js");



var game = {
    wordBank: ['butterfinger', 'hersheys', 'crunch', 'payday', 'reeses', 'snickers', 'twix', 'toblerone', 'whatchamacallit'],
    currentWord: null,
    startGame: function () {
        console.log("\n\nReady to play Candy Hangman? \nGuess what candy bar I'm craving!");
        console.log("----------------------------\n");
        // Getting a new random word from the word bank
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        this.currentWord.displayWord();
        // ******Why does this not get rid of the commas
        console.log(this.currentWord.lettersShown.join(" "))
        console.log("---------------------------\n")
        // Passing the current word through to the userInteraction functions
        this.userInteraction(this.currentWord);
    },
    userInteraction: function (word) {
        // Adding a variable for this to deal with scoping issues
        var now = this;
        // if statement to ensure that we continue with the current word until guessed or out of guesses
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
                // Runs the prompt again
                now.userInteraction(word);

            });
        } else {
            // If won or out of guesses, end the game and start again
            if(word.remainingGuesses === 0){
                console.log("\nOh no! Looks like you ran out of guesses. \nThe correct answer was "+this.currentWord.letterArr.join("")+"!");
            } else {
                console.log("\nCongratulations! You got it! The answer was "+this.currentWord.letterArr.join(""));
            };
            // Start the game again
            this.startGame();
        }
    },
};

// Initial Game Start
game.startGame();