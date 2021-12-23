import './App.css';
import ExpenseNavbar from './Components/Navbar/expense-navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseAmount from './Components/Forms/expense-amount';
import ExpenseDesc from './Components/Forms/expense-description';
import ExpenseLocation from './Components/Forms/expense-location';
import ExpenseCurrency from './Components/Forms/expense-currency';
import ExpenseCalendar from './Components/Calendar/expense-calendar';
import ExpenseTable from './Components/Table/expense-table';




function App() {
  return (
    <div className="App">
      <ExpenseNavbar></ExpenseNavbar>
      <header className="App-header">
        <ExpenseAmount />
        <ExpenseDesc />
        <ExpenseLocation />   
        <ExpenseCurrency />
        <ExpenseCalendar />
        <ExpenseTable />
      </header>
      
    </div>
  );
}

export default App;
