import React, { useState } from 'react';
import './Expense.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
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
                <ExpenseChart  expense={fileteredExpenses} />
                <ExpenseList items={fileteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expense;