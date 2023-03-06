import { createContext } from "react";
import { expenseListInitialState } from "../Models/expenseListInitialState";

const ExpenseListContext = createContext(expenseListInitialState);