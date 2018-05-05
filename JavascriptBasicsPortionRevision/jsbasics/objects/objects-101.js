let myBook = {
    title : '1985',
    author : 'George Orwell',
    pageCount : 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

let myPerson = {
    name : 'James',
    age : 30,
    location : 'Los Angeles'
}
console.log(`${myPerson.name} is ${myPerson.age} years old and lives in ${myPerson.location} `);

// OBJECT DESTRUCTURING WILL COVER LATER
let {name,age,location} = myPerson;
console.log(name,age,location);

myPerson.age += 1;

console.log(`${myPerson.name} is ${myPerson.age} years old and lives in ${myPerson.location} `);
