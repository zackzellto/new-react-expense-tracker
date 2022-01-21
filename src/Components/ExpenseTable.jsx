import React from "react";
import { Table } from "react-bootstrap";

const ExpenseTable = ({ expenseList }) => {
    const ExpenseDeleteFunction = (e) => {
        e.target.parentElement.parentElement.remove();          
    }

  return (
    <div name="table" className="table-container">
      <Table>
        <thead>
          <tr>
            <th>Expense Date</th>
            <th>Expense Amount</th>
            <th>Expense Description</th>
            <th>Expense Location</th>
            <th>Payment Method</th>
            <th>Delete Expense</th>
          </tr>
        </thead>
        <tbody>
            {expenseList.map(expense => {
                return (
                    <tr key={expense.name}>
                    <td>{expense.date}</td>
                    <td>{expense.amount}</td>{" "}
                    <td>${expense.description}</td> 
                    <td>{expense.location}</td>{" "}
                    <td>{expense.currency}</td> 
                    <td><button onClick={ExpenseDeleteFunction}>
                            Delete
                        </button></td>{" "}
                  </tr>  
                )
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default ExpenseTable;
