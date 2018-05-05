let greetUser = function(){
    console.log('Welcome user');
}

greetUser();


let square = function(num){
    let result =  num* num;
    return result;
}

let value = square(3);
console.log(value);

let otherValue = square(10);
console.log(otherValue);

let fahrenheitToCelcius = function(fahrenheit){
    return (fahrenheit - 32)*(5/9);
}
console.log(fahrenheitToCelcius(32));