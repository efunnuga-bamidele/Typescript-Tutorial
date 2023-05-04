// let character = 'Luigi';
// let age = 30;
// let isBlackBelt = false;


// character = 20;
// character = 'Mario';
// age = 'yoshi';
// age = 40;

// isBlackBelt = true;

// console.log(character);

// const inputs = document.querySelectorAll('input');

// console.log(inputs);

// inputs.forEach( input => {
//     console.log(input);
// });

// const circ = (diameter: number) => {
//     return diameter * Math.PI
// }

// console.log(circ(7.5))

// arrays
// let names = ['luigi', 'mario', 'yoshi'];

// names.push('toad');
// names.push(3);
// names[0] = 3;

// let numbers = [10, 20, 30, 40];

// numbers.push(25);
// numbers.push('mario');
// numbers[1] = 'mario'

// let mixed = ['ken', 4, 'chun-li', 8, 9, true];

// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;

// Objects

// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age:30
// };

// ninja.age = 40;
// ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking'];

// ninja = {
//     name: 'yoshi',
//     belt: 'orange',
//     age: 40
// }

// // Explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;

isLoggedIn = true;

// arrays

let ninja: string[] = [];

ninja = ['Mario', 'Luigi', 'Yoshi'];
// ninja.push('shaun');

console.log(ninja);

// union types 

let mixed: (string|number|boolean) [] = [];

mixed.push('hello');
mixed.push(20);
mixed.push(false);

console.log(mixed);

let uid: string|number;
uid = 123;
uid = '123';

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 50};

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
};

ninjaTwo = {name : 'mario', age: 20, beltColor: 'black'};


