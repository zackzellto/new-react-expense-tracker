import React from "react";
import { Form } from "react-bootstrap";


const InputForm =
  ({
    handleSubmit,
    description,
    setDescription,
    currency,
    setCurrency,
    amount,
    setAmount,
    location,
    setLocation,
    date,
    setDate,
  }) => {
    return (
      <Form className="input-forms" onSubmit={handleSubmit}>
        <div name="forms">
          <label>
            Description:
            <input
              name="description"
              type="text"
              placeholder="Purchase Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Currency:
            <select
              as="select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="default">Select Your Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
              <option value="Crypto">Crypto</option>
            </select>
          </label>
          <label>
            Amount:
            <input
              name="amount"
              type="number"
              min="0"
              placeholder="Purchase Amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <label>
            Location:
            <input
              name="location"
              type="text"
              placeholder="Purchase Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label>
            Date:
            <input
              name="date"
              type="date"
              placeholder="Purchase Date..."
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit" name="submitBtn">
            Submit
          </button>
        </div>
      </Form>
    );
  };

export default InputForm;
