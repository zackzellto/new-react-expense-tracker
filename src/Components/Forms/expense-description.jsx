import React from "react";
import { Form } from "react-bootstrap";
import useForm from "react-hook-form"

const ExpenseDesc = () => {
  return (
    <Form>
      <label name="description">
        Description:
        <input type="text" placeholder="Purchase description..."/>
      </label>
    </Form>
  );
};

export default ExpenseDesc;
