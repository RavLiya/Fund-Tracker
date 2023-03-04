import './App.css';
import {useState, useEffect} from "react";
import AddExpense from './Components/Components/AddExpence/AddExpense';
import Header from './Components/Components/Header/Header';
import { Expense } from './Components/Components/Models/Expense';

let expensesList:Expense[];

function App () {

  const [expenses, setExpenses] = useState<Expense>(Object);

  function updateList() {
    {...expensesList, expenses}
  }
  
  useEffect(() => {
    updateList();
  }, expenses)

  return (
    <div className="App">
      <Header />
      <AddExpense  setExpenses={setExpenses} />
    </div>
  );
}

export default App;
