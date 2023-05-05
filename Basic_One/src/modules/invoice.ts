import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {

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

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}