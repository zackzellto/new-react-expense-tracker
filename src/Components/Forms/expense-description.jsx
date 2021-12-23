import React from "react";
import { Form } from "react-bootstrap";

const ExpenseDesc = () => {
  return (
    <Form>
      <label>
        Description:
        <input type="text" name="description" placeholder="Purchase description..."/>
      </label>
    </Form>
  );
};

export default ExpenseDesc;
