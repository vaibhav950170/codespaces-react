import React,{useState} from "react";
import Expense from "./components/Expenses/Expense.js";
import NewExpense from "./components/newExpense/NewExpense.js";

const DUMMY_EXPENSES = [
  {
    title:"Toilet Paper",
    amount:94.12,
    date: new Date(2023,0,16)
  },
  {
    title:"Paper",
    amount:102.12,
    date: new Date(2023,2,15)
  },
  {
    title:"Scissor",
    amount:4.12,
    date: new Date(2023,1,21)
  }
];

function App() {
  const [expenses,setExpenses] =useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense=>{
    setExpenses([expense,...expenses]);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items={expenses}></Expense>
    </div>  
  );
}

export default App;
