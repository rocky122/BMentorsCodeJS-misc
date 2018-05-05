const square  = n => n*n;

const squareLong = num => num*num;

console.log(square(3));

const people = [
    {
        name : 'Andrew',
        age : 27
    },
    {
        name : 'Vikram',
        age: 31
    },
    {
        name : 'Jess',
        age : 22
    }
];

const peopleUnder30 = people.filter(person => person.age < 30);
console.log(peopleUnder30);
//Render all the people aged under 30
peopleUnder30.forEach(person => console.log(`${person.name} is ${person.age} years old`));

//Find all the people aged above 30 and render out
const peopleAbove30 = people.filter(person => person.age > 30);
peopleAbove30.forEach(person => console.log(`${person.name} is ${person.age} years old`));

//Find all the people who are exactly aged 22 and render out
const age22 = people.filter(person => person.age == 22);
console.log(age22[0].name);