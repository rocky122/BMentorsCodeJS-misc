let num = 103.941;
console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;

let randomNum = Math.floor((max-min+1)*Math.random()) + min;
console.log(randomNum);

//guess name
let makeGuess = function(guess){
    let min = 1;
    let max = 5;
    let actualValue = Math.floor((max-min+1)*Math.random()) + min;
    return actualValue === guess;
}

console.log(makeGuess(1));