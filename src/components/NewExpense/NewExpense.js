import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseHandler = expense => {
        props.onAddExpense(expense);
        setIsEditing(false)
    }
    const startEditingHandler = (event) => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className='new-expense'>
            {isEditing ? <ExpenseForm onCancel={stopEditingHandler} onSaveExpense={saveExpenseHandler} /> : <button onClick={startEditingHandler}>Add New Expenses</button>}


        </div>
    );
};

export default NewExpense;