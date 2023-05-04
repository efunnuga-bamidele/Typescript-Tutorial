"use strict";
// const anchor = document.querySelector('a')!;  //not null specifier = !
// if(anchor){
//     console.log(anchor.href);
// }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// classes
class Invoice {
    // method One
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // // constructor to initialize assignment
    // constructor(c: string, d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    // Method Two using only the constructor !note: must have modifiers
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Mario', 'work on the mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the luigi website', 300);
// console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = 'Yoshi';
invTwo.amount = 400;
// console.log(invoices)
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form'); //Type casting 
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
