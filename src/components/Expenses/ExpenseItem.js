import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>Title: {props.title}</h2>
            </div>
            <div className='expense-item__price'>Amount: {props.amount}</div>
        </Card>
    );
}

export default ExpenseItem;
