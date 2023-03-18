import Expense from "./components/Expense.js";

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
      <h2>Let's get started!</h2>
      <Expense items={expenseItem}></Expense>
    </div>  
  );
}

export default App;
