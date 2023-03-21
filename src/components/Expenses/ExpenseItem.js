import './ExpenseItem.css';
import './ExpenseDate.js';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';
function ExpenseItem(data) {

    return (<Card className='expense-item'>
        <div>
            <ExpenseDate date = {data.date}></ExpenseDate>
        </div>
        <div className='expense-item__description'>
            <h2>{data.title}</h2>
            <div className='expense-item__price'>${data.amount}</div>
        </div>
    </Card>);
}

export default ExpenseItem;