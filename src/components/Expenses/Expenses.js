import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFIlteredYear] = useState("2020");
    const filterChangeHandler = selectedYear => {
        setFIlteredYear(selectedYear)
        console.log(filteredYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map(expense => {
                return <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            })}
        </Card>
    );
}

export default Expenses;