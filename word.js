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


// creates the printInfo method and applies it to all Word objects
Word.prototype.printInfo = function() {
    // console.log("Name: " + this.name + "\nPosition: " + this.position +
    // "\nAge: " + this.age + "\nLanguages: " + this.language);
    console.log("---------------");
  };
  
// var timesGuessed = 0;

// var userGuess = function() {
//   if (timesGuessed<10) {
//     inquirer.prompt([
//       {
//         name: "name",
//         message: "What is your name?"
//       }
// //     ]).then(function(answers) {
//       // initializes the variable newguy to be a programmer object which will
//       // take in all of the user's answers to the questions above
//       var newGuy = new Programmer(
//         answers.name,
//         answers.position,
//         answers.age,
//         answers.language);
//       // pushes newguy object into our array
//       programmerArray.push(newGuy);
//       // add one to count to increment our recursive loop by one
//       count++;
//       // run the askquestion function again so as to either end the loop or ask the questions again
//       askQuestion();
//     });
//     // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
//   }
//   else {
//     for (var x = 0; x < programmerArray.length; x++) {
//       programmerArray[x].printInfo();
//     }
//   }
// };

// TEST
var currentWord = new Word("dog");
console.log(currentWord.letterArr);