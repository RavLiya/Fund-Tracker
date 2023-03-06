import './App.css';
import {useState} from "react";
import AddExpense from './Components/Containers/AddExpence/AddExpense';
import Header from './Components/Components/Header/Header';
import { Expense } from './Components/Components/Models/Expense';
import { createContext } from 'react';
import { expenseListInitialState } from './Components/Components/Models/expenseListInitialState';
import ExpenseList from './Components/Containers/ExpenseList/ExpenseList';

const StateContext = createContext(expenseListInitialState);
const  expensesList = expenseListInitialState;

function App () {

  return (
    <StateContext.Provider value={expensesList}>
      <Header />
      <AddExpense />
      <ExpenseList />
    </StateContext.Provider>
  );
}

export default App;

export {StateContext};
