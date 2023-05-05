// Interfaces
import { Invoice } from "./modules/invoice.js";
import { Payment } from "./modules/payment.js";
import { ListTemplate } from "./modules/listTemplate.js";
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
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values; //implementing tuples
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    }
    else {
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values);
    }
    // console.log(doc);
    list.render(doc, type.value, 'end');
});
// Generics
// const addUID = (obj: object) => {
// const addUID = <T extends object>(obj: T) => {
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docUID = addUID({ name: 'yoshi', age: 40 });
console.log(docUID);
// with interface
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// };
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name: 'shaun'}
// }
// const docFour: Resource<string[]> = {
//     uid:2,
//     resourceName: 'shoppingList',
//     data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree, docFour);
// // Enum
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// };
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.PERSON,
//     data: {name: 'shaun'}
// }
// const docFour: Resource<object> = {
//     uid:2,
//     resourceType: ResourceType.BOOK,
//     data: {title: 'name of the wind'}
// }
// console.log(docThree, docFour);
// tuples
let tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
let student;
student = ['shaun', 323565];
