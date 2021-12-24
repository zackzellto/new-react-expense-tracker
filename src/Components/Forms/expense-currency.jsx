import React from "react";
import { Form } from "react-bootstrap";

const ExpenseCurrency = () => {
  return (
    <Form>
      <label name="currency" >
        Currency:
        <input type="text" placeholder="Currency used..."/>
      </label>
    </Form>
  );
};

export default ExpenseCurrency;