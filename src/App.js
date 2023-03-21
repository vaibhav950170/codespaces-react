import React from "react";
import Expense from "./components/Expenses/Expense.js";
import NewExpense from "./components/newExpense/NewExpense.js";

function App() {
  const expenseItem = [
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
  return (
    <div>
      <NewExpense></NewExpense>
      <Expense items={expenseItem}></Expense>
    </div>  
  );
}

export default App;
