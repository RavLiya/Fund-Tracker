import { Expense } from "./Expense"
export type actions = 
    | {type: "Reason", payload:string}
    | {type: "Amount", payload:number}
    | {type: "Date", payload:string}
    | {type: "Category", payload:string}
    // | {type: "ExpenseState", payload:Expense}
