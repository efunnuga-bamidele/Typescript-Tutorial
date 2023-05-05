// Interfaces
import { Invoice } from "./modules/invoice.js";
import { Payment } from "./modules/payment.js";
// Rules enforcer
// interface IsPerson{
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: "shaun",
//     age: 30,
//     speak(text: string): void{
//         console.log(text);
//     },
//     spend(amount: number): number{
//         console.log('I spent', amount);
//         return amount;
//     }
// }
// console.log(me)
// const greetPerson = (person: IsPerson) => {
//     console.log('Hello', person.name);
// }
// greetPerson(me);
// import { Invoice } from "./modules/invoice.js";
// import { Payment } from "./modules/payment.js";
// import { HasFormatter } from "./interfaces/HasFormatter.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('Mario', 'work on the mario website', 250);
// const invTwo = new Invoice('Luigi', 'work on the luigi website', 300);
// // console.log(invOne, invTwo);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// // invOne.client = 'Yoshi';
// invTwo.amount = 400;
// // console.log(invoices)
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });
const form = document.querySelector('.new-item-form'); //Type casting 
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
