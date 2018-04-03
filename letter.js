// Defining the constructor for a letter 
var Letter = function (x){
    // Stores underlying value for letter
    this.underlying = x;
    // Has this letter been guessed?
    this.guessed = false;
    // Default way to show letter
    this.shown = "_";
    // Function to determine whether to show placeholder or underlying value
    this.displayLetter = function (){
        if(this.guessed){
            this.shown = this.underlying;
        };
    };
    // Function to determine if the guessed letter equals the underlying value
    this.checkLetter = function (guess){
        if(guess === this.underlying){
            this.guessed = true;
            this.displayLetter();
        }
    }
};

// Export Letter 
module.exports = Letter;


// TEST
var newL = new Letter ("a");

console.log(newL.underlying);
console.log(newL.guessed);
console.log(newL.shown);

newL.checkLetter("b");
console.log(newL.underlying);
console.log(newL.guessed);
console.log(newL.shown);

newL.checkLetter("a");
console.log(newL.underlying);
console.log(newL.guessed);
console.log(newL.shown);

