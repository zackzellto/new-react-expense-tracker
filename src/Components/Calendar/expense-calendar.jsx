import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

class ExpenseCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);
  }

  render() {
    return (
      <form name="calendar" onSubmit={this.onFormSubmit}>
          <label>Date:
        <div className="form-group">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            name="startDate"
            dateFormat="MM/dd/yyyy"
          />
          
        </div>
        </label>
      </form>
    );
  }
}

export default ExpenseCalendar;
