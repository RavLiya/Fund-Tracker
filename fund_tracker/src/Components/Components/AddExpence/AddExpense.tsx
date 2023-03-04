import "./AddExpense.scss";
import { useReducer, useState } from "react";
import { initialState } from "../Models/InitialStates";
import { Reducer } from "../../Containers/Reducer";
import { Expense } from "../Models/Expense";

type Props = {
    setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  }

export default function AddExpense({setExpenses}) {

    const [state, dispatch] = useReducer (Reducer, initialState)

    const handleSubmit = {
        dispatch({type:"ExpenseState", payload:state})
    }

    return (
        <div className="addExpense">
            <form className="addExpense__form" onSubmit={handleSubmit}>
                <input type="text" className="addExpense__form__reason" onChange={(e) => {dispatch({type:'Reason', payload:(e.target.value)})}} />
                <input type="date" className="addExpense__form__date" onChange={(e) => {dispatch({type:'Date', payload:(e.target.value)})}} />
                <input type="number" min="0.00" step="0.01" className="addExpense__form__amount" placeholder="0.0" onChange={(e) => {dispatch({type:'Amount', payload:(Number(e.target.value))})}} />
                <select className="addExpense__form__categories">
                    <option value="Category" disabled={true}>Select a category</option>
                    <option value="Education">Education</option>
                    <option value="Food">Food</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit" className="addExpense__form__addbutton">Add</button>
            </form>
        </div>
    )
}