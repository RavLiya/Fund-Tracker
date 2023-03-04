import { actions } from "../Components/Models/actions";
import { Expense } from "../Components/Models/Expense";

export function Reducer (state:Expense, action:actions) {
    switch (action.type) {
        case "Reason":
            return {...state, reason:action.payload};
        case "Amount":
            return {...state, amount:action.payload};
        case "Date":
            return {...state, date:action.payload};
        case "Category":
            return {...state, category:action.payload}; 
    }
}