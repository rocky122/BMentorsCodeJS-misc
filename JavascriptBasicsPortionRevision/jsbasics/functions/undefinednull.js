let name;       //undefined

if(name === undefined){
    console.log('please define the name');
}else{
    console.log(name);
}

//Undefined for the function arguments
let square = function(num){
    console.log(num);
}

let result = square(3); // square function just logs on the console and doesn't return a value
console.log(result);

let age = 27;
age = null;
console.log(age);
