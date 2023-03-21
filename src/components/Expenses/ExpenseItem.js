import './ExpenseItem.css';
import './ExpenseDate.js';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';
import { useState } from 'react';

    


function ExpenseItem(data) {
    const [title,setTitle] = useState(data.title); 
    const clickHandler = ()=>{
        setTitle('Updated!!.');
        console.log("Clicked!!!!");
    }
    return (<Card className='expense-item'>
        <div>
            <ExpenseDate date = {data.date}></ExpenseDate>
        </div>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${data.amount}</div>
        </div>
        <button onClick={clickHandler}>
            Change title
            </button>
    </Card>);
}

export default ExpenseItem;