import "./AddExpense.scss";
import { useContext, useReducer, useState } from "react";
import { initialState } from "../../Components/Models/InitialStates";
import { Reducer } from "../Reducer";
import { Expense } from "../../Components/Models/Expense";
import { StateContext } from "../../../App";

const AddExpense:React.FC =() => {
    const [state, dispatch] = useReducer (Reducer, initialState);
    let  = useContext(StateContext);
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(expensesList);
        // expensesList.push(state);
        return {...expensesList,state};
    } 

    return (
        <div className="addExpense">
            <form className="addExpense__form" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" className="addExpense__form__reason" onChange={(e) => {dispatch({type:'Reason', payload:(e.target.value)})}} />
                <input type="date" className="addExpense__form__date" onChange={(e) => {dispatch({type:'Date', payload:(e.target.value)})}} />
                <input type="number" min="0.00" step="0.01" className="addExpense__form__amount" placeholder="0.0" onChange={(e) => {dispatch({type:'Amount', payload:(Number(e.target.value))})}} />
                <select className="addExpense__form__categories" onChange={(e) => {dispatch({type:'Category', payload:(e.target.value)})}}>
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
export default AddExpense;
