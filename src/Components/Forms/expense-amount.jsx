import React from "react";
import { Form } from "react-bootstrap";

const ExpenseAmount = () => {
  return (
    <Form>
      <label>
        Amount: 
        <input type="text" name="amount" placeholder="Purchase amount..."/>
      </label>
    </Form>
  );
};

export default ExpenseAmount;
