import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
function Expense(prop) {
    const [filteredYear, setFileterdYear] = useState('2022');
    const filterChangeHandler = selectedYear => {
        setFileterdYear(selectedYear);
    }

    const fileteredExpenses = prop.items.filter(expense=> {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onchangeExpnseYear={filterChangeHandler}></ExpensesFilter>
                {fileteredExpenses.map(expense => 
                <ExpenseItem 
                key={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} />)}
            </Card>
        </div>
    )
}

export default Expense;