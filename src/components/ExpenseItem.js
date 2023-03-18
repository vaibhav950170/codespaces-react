import './ExpenseItem.css';
import './ExpenseDate.js';
import ExpenseDate from './ExpenseDate.js';
function ExpenseItem(data) {

    return (<div className='expense-item'>
        <div>
            <ExpenseDate date = {data.date}></ExpenseDate>
        </div>
        <div className='expense-item__description'>
            <h2>{data.title}</h2>
            <div className='expense-item__price'>${data.amount}</div>
        </div>
    </div>);
}

export default ExpenseItem;