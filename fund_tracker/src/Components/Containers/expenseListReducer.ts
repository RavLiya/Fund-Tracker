import { actions, listActions } from "../Components/Models/actions";
import { Expense } from "../Components/Models/Expense";

export function expenseListReducer (state:Expense[], action:listActions) {
    switch (action.type) {
        case "AddExpense":
            return {...state, reason:action.payload};
    }
}