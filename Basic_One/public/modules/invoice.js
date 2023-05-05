export class Invoice {
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
