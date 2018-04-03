var letter = require("./letter.js");


// A function that returns a string representing the word. 
// This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function 
// on each letter object (the second function defined in Letter.js)

// Defining the constructor for a word 
var Word = function (word){
    // Splits the string into an array of letters
    this.letterArr = word.split("");
   

};


// TEST
var currentWord = new Word("dog");
console.log(currentWord.letterArr);