import React from "react";
import { Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Invoice from "../../Components/Navbar/invoice-icon.png"


const ExpenseNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          id="navbar-image"
          alt=""
          src={Invoice}
          width="60"
          height="60"
          className="d-inline-block fluid align-top"
        />{' '}
        <div id="navbar-text">Expense Tracker</div>
      </Navbar.Brand>
   
  </Navbar>
  );
};

export default ExpenseNavbar;
