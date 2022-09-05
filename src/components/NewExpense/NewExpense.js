import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    const saveExpenseHandler = expense => {
        console.log("New Expenses");
        console.log(expense);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    );
};

export default NewExpense;