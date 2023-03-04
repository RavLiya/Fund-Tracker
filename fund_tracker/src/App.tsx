import './App.css';
import {useState} from "react";
import AddExpense from './Components/Components/AddExpence/AddExpense';
import Header from './Components/Components/Header/Header';
import { Expense } from './Components/Components/Models/Expense';

function App () {

  const [expenses, setExpenses] = useState<Expense[]>([])

  return (
    <div className="App">
      cont
      <Header />
      <AddExpense  setExpenses={setExpenses} />
    </div>
  );
}

export default App;
