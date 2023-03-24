import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';
const ExpenseList = props => {
    

    return (<ul className="expense-list">
        {props.items.length===0 ? <h2 className="expenses-list__fallback">Found no Expenses.</h2>:
    props.items.map(expense => 
    <ExpenseItem 
    key={expense.id} 
    title={expense.title} 
    amount={expense.amount} 
    date={expense.date} />)}
    </ul>)
}

export default ExpenseList;