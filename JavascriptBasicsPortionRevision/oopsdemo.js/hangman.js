import { ENGINE_METHOD_RAND } from "constants";

const Hangman = function(word,maxGuesses){
    this.word = word;
    this.maxGuesses = maxGuesses;
}

const game1 = new Hangman('cat',4);
const game2 = new Hangman('purple',9);

console.log(game1);
console.log(game2);