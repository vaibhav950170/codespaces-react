import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
function Expense(prop) {
    const [filteredYear,setFileterdYear]=useState('2022');
    const filterChangeHandler = selectedYear=>{
    setFileterdYear(selectedYear);
}

    return (
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onchangeExpnseYear = {filterChangeHandler}></ExpensesFilter>
            <ExpenseItem 
            title={prop.items[0].title} 
            amount={prop.items[0].amount} 
            date={prop.items[0].date} />
             <ExpenseItem 
            title={prop.items[1].title} 
            amount={prop.items[1].amount} 
            date={prop.items[1].date} /> 
            <ExpenseItem 
            title={prop.items[2].title} 
            amount={prop.items[2].amount} 
            date={prop.items[2].date} />
            </Card>
            </div>
    )
}

export default Expense;