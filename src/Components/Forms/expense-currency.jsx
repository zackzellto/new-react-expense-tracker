import React from "react";
import { Form } from "react-bootstrap";

const ExpenseCurrency = () => {
  return (
    <Form>
      <label>
        Currency:
        <input type="text" name="currency" placeholder="Currency used..."/>
      </label>
    </Form>
  );
};

export default ExpenseCurrency;