import React, { useState } from "react";
import ExpenseTable from "./Components/ExpenseTable"
import InputForm from "./Components/InputForm"
import "./App.css";
import ExpenseNavbar from "./Components/Navbar/expense-navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./Components/Header/logo.png";

function App() {    

    const [description, setDescription] = useState('');
    const [currency, setCurrency] = useState('');
    const [amount, setAmount] = useState(0);
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [expenseList, setExpenseList] = useState([]);
    
    const handleSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      id: Date.now(),
      description,
      currency,
      amount,
      location,
      date
    };

    setExpenseList([...expenseList, newExpense]);
  };

  function WheelImage() {
    return <img src={Logo} alt="Logo" name="wheel" />;
  }

  return (
    <div className="App">
      <ExpenseNavbar />
      <header className="App-header">
        
        <div name="app-container">
          <div>
            <WheelImage />
            
            <InputForm 
            handleSubmit={handleSubmit}
            description={description}
            setDescription={setDescription}
            currency={currency}
            setCurrency={setCurrency}
            amount={amount}
            setAmount={setAmount}
            location={location}
            setLocation={setLocation}
            date={date}
            setDate={setDate}
            />
            
            <ExpenseTable expenseList={expenseList} />            
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
