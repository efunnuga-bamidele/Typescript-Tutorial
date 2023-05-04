"use strict";
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
// // // Explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// age = 30;
// isLoggedIn = true;
// // arrays
// let ninja: string[] = [];
// ninja = ['Mario', 'Luigi', 'Yoshi'];
// // ninja.push('shaun');
// console.log(ninja);
// // union types 
// let mixed: (string|number|boolean) [] = [];
// mixed.push('hello');
// mixed.push(20);
// mixed.push(false);
// console.log(mixed);
// let uid: string|number;
// uid = 123;
// uid = '123';
// // objects
// let ninjaOne: object;
// ninjaOne = { name: 'yoshi', age: 50};
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColor: string
// };
// ninjaTwo = {name : 'mario', age: 20, beltColor: 'black'};
// // Any Type
// let age: any;
// age = 25;
// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = { name: 'luigi'};
// console.log(age);
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(true);
// console.log(mixed);
// let ninja: { name: any, age: any};
// ninja = { name: 'yoshi', age: 25};
// console.log(ninja);
// // Functions
// let greet: Function;
// greet = () => {
//     console.log("Hello World Function");
// }
// greet();
// // const add = (a: number, b: number) => {
// //     console.log(a + b);
// // };
// // const add = (a: number, b: number, c?:number | string) => {
// //     console.log(a + b);
// //     console.log(c);
// // };
// const add = (a: number, b: number, c:number | string = 0) => {
//     console.log(a + b);
//     console.log(c);
// };
// add(5, 10 , '20');
// // const minus = (a: number, b: number) => {
// //     return a + b;
// // };
// const minus = (a: number, b: number): number => {
//     return a + b;
// };
// let result = minus(10, 7);
// console.log(result);
// Type Aliases
// const logdetails = (uid: string | number, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// };
// const greet = (user: {name: string, uid: string | number}) => {
//     console.log(`${user.name} says hello`);
// };
// type StringOrNum = string | number;
// type objWithName = { name: string, uid: StringOrNum};
// const logdetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// };
// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// };
// Function Signatures
// let greet: Function;
// let greet: (a: string, b:string) => void; 
// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//     if (action === 'add') {
//         return numOne + numTwo;
//     } else {
//         return numOne - numTwo;
//     }
// }
// let logDetails: (obj: {name: string, age: number}) => void;
// type person = { name: string, age: number};
// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// }
