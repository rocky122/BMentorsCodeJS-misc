let name = '       Andrew Mead   ';

//length property
console.log(name.length);

//convert the name to uppercase
console.log(name.toUpperCase());

//Includes method
let password = 'abc123901739247098';

console.log(password.includes('password'));

//Trim method
console.log(name.trim());

let isValidPassword = function(password){
    return password.length > 8 && !password.includes('password');
}

console.log(isValidPassword('asdfpasdfpoijpassword'))   //false