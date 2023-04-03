import './ExpenseItem.css'

function ExpenseItem() {

    const expenseDate = new Date(2023, 4, 3);
    const expenseTitle = 'Period Products';
    const expenseAmount = 0;

    return (
        <div className='expense-item'>
            <div>Date: April 3 2023</div>
            <div className='expense-item__description'>
                <h2>Title: {expenseTitle}</h2>
            </div>
            <div className='expense-item__price'>Amount: {expenseAmount}</div>
        </div>
    );
}

export default ExpenseItem;
