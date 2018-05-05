let add = function(a,b){
    return a + b;
}


let result = add(10,1);

console.log(result);

let getScoreText = function(name='anonymous',score=0){
    return `Name: ${name} Score: ${score}`;
}

let scoreText = getScoreText();
console.log(scoreText);

console.log(getScoreText(undefined,90));

let tipCalculator = function(total,tipPercent=0.2){
    return `You should tip $${total*tipPercent}`;
}

console.log(tipCalculator(100));
console.log(tipCalculator(100,0.4));