import "./App.css";
import ExpenseNavbar from "./Components/Navbar/expense-navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseAmount from "./Components/Forms/expense-amount";
import ExpenseDesc from "./Components/Forms/expense-description";
import ExpenseLocation from "./Components/Forms/expense-location";
import ExpenseCurrency from "./Components/Forms/expense-currency";
import ExpenseCalendar from "./Components/Calendar/expense-calendar";
import ExpenseTable from "./Components/Table/expense-table";
import Header from "./Components/Header/expense-header";

function App() {
  const expenses = [
    {
      description: "Rent",
      type: "cash",
      amount: "$1000",
      date: "2020-01-01",
    }  
  ];
  
  const expenseList = expenses.map((prop) => {
    return (
      <tr key={prop.name}>
        {" "}
        <td>{prop.description}</td> <td>{prop.type}</td>{" "}
        <td>{prop.amount}</td> <td>{prop.date}</td>{" "}
        {" "}
      </tr>
    );
  });

  // const expenseList = expenses.map((prop => {
  //   return ( 
  //   <div> 
  //   <td>{expenses.description}</td>
  //   <td>{expenses.type}</td>
  //   <td>{expenses.amount}</td>
  //   <td>{expenses.date}</td>
  //   </div>
  //   )
  // )} 

  return (
    <div className="App">
      <ExpenseNavbar></ExpenseNavbar>
      <header className="App-header">
        <div name="app-container">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              
                {expenseList}
              
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
