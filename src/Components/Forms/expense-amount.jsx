import React from "react";
import { Form } from "react-bootstrap";
import useForm from "react-hook-form"

const ExpenseAmount = () => {
  return (
    <Form>
      <label name="amount" >
        Amount: 
        <input type="text" placeholder="Purchase amount..."/>
      </label>
    </Form>
  );
};

export default ExpenseAmount;
