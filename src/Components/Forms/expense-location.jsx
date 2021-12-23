import React from "react";
import { Form } from "react-bootstrap";

const ExpenseLocation = () => {
  return (
    <Form>
      <label>
        Location:
        <input type="text" name="location" placeholder="Purchase location..." />
      </label>
    </Form>
  );
};

export default ExpenseLocation;