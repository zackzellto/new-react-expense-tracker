import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./App.css";
import ExpenseNavbar from "./Components/Navbar/expense-navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./Components/Header/logo.png";

function App() {

  const expenses = [
    {
      description: "",
      currency: "",
      amount: "",
      location: "",
      date: "",
      delete: <button type="delete">Delete</button>
    },
  ];

  const [addFormData, setAddFormData] = useState({ 
      description: "",
      currency: "",
      amount: "",
      location: "",
      date: "",
      delete: <button type="delete">Delete</button>   
  })
  
  // const handleAddFormChange = (event) => {
  //   event.preventDefault();

  //   const inputName = event.target.getAttribute('name')
  //   const inputValue = event.target.value;

  //   const newFormData = { ...addFormData};
  //   newFormData[inputName] = inputValue;

  //   setAddFormData(newFormData);
  // }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      description: addFormData.description,
      currency: addFormData.currency,
      amount: addFormData.amount,
      location: addFormData.location,
      date: addFormData.date,
    };

    const newExpenses = [...expenses, newExpense];
    // setExpenses(newExpenses);
  }

  const Forms = () => {
    return (
      <Form onSubmit={handleAddFormSubmit}>
        <div name="forms">
          <label>
            Description:
            <input
            name="description" 
            type="text" 
            placeholder="Purchase Description..." 
            // onChange={handleAddFormChange}
            />
          </label>
          <label>
            Currency:
            <input
            name="currency" 
            type="text" 
            placeholder="Currency Used..." 
            // onChange={handleAddFormChange}
            />
          </label>
          <label>
            Amount:
            <input
            name="amount" 
            type="text" 
            placeholder="Purchase Amount..." 
            // onChange={handleAddFormChange}
            />
          </label>
          <label>
            Location:
            <input 
            name="location"
            type="text" 
            placeholder="Purchase Location..." 
            // onChange={handleAddFormChange}
            />
          </label>
          <label>
            Date:
            <input
            name="date" 
            type="text" 
            placeholder="Purchase Date..." 
            // onChange={handleAddFormChange}
            />
          </label>
        </div>
        <div>
        <button type="submit" name="submitBtn" onClick={handleAddFormSubmit}>Submit</button>
        </div>
      </Form>
    );
  };

  function WheelImage() {
    return <img src={Logo} alt="Logo" name="wheel" />;
  }

 

  const expenseList = expenses.map((prop) => {
    return (
      <tr key={prop.name}>
        {" "}
        <td>{prop.description}</td> <td>{prop.currency}</td>{" "}
        <td>${prop.amount}</td> <td>{prop.location}</td> <td>{prop.date}</td> <td>{prop.delete}</td>{" "}
      </tr>
    );
  });

  return (
    <div className="App">
      <ExpenseNavbar></ExpenseNavbar>
      <header className="App-header">
        <div name="app-container">
          <div><Forms />
            <WheelImage />
            
            <submitButton />
          </div>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Location</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>{expenseList}</tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
