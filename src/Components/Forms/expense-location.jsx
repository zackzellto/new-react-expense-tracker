import React from "react";
import { Form } from "react-bootstrap";
import useForm from "react-hook-form"

const {}

const ExpenseLocation = () => {
  return (
    <Form>
      <label name="location">
        Location:
        <input type="text" placeholder="Purchase location..." />
      </label>
    </Form>
  );
};

export default ExpenseLocation;