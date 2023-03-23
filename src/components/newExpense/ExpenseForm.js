import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    const[eneteredTitle,setEneteredTitle] = useState('');
    const[eneteredAmount,setEneteredAmount] = useState('');
    const[eneteredDate,setEneteredDate] = useState('');
    // const[userState,setUserState] = useState({
    //     eneteredTitle:'',
    //     eneteredAmount:'',
    //     eneteredDate:'',
    // });
 const titleChangeHandler= (event)=>{
    setEneteredTitle(event.target.value)
    // setUserState({
    //     ...userState,
    //     eneteredTitle:event.target.value,
    // })
 }
 const amountChangeHandler= (event)=>{
    setEneteredAmount(event.target.value)
    // setUserState({
    //     ...userState,
    //     eneteredAmount:event.target.value,
    // })
 }
 const dateChangeHandler= (event)=>{
    setEneteredDate(event.target.value)
//     setUserState({
//         ...userState,
//         eneteredDate:event.target.value,
//     });
  }
 const submitForm = (event)=>{
    event.preventDefault();
    const expenseData={
        title: eneteredTitle,
        amount: eneteredAmount,
        date: new Date(eneteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEneteredTitle('');
    setEneteredAmount('');
    setEneteredDate('');
 }
return (
    <form onSubmit={submitForm}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={eneteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Price</label>
                <input type='number' value={eneteredAmount} min='0.01' step='0.01'onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={eneteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
)
}

export default ExpenseForm;