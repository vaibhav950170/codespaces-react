import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const saveExpenseDataHandler = (eneteredExpenseData)=>{
        const expenseData={
            ...eneteredExpenseData,
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };
   return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
   )
}

export default NewExpense;