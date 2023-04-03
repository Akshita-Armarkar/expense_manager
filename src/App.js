import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {title: 'stuff', amount: 26, date: new Date(2023, 2, 3)},
    {title: 'stuff', amount: 26, date: new Date(2023, 2, 3)},
    {title: 'stuff', amount: 26, date: new Date(2023, 2, 3)}
  ]

  return (
    <div>
      <h2>Lets get started!</h2>
      <ExpenseItem />
    </div>
  );
}

export default App;
