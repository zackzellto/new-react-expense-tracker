import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

 
const ExpenseTable = () => {
    return(
        <div className="table-container">
            <Table>
                <thead>
                    <tr>
                        <th>Expense Date</th>
                        <th>Expense Amount</th>
                        <th>Expense Description</th>
                        <th>Expense Location</th>
                        <th>Payment Method</th>
                        <th>Delete Expense</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A</td>
                        <td>AA</td>
                        <td>AAA</td>
                        <td>AAA</td>
                        <td>AAAA</td>
                        <td>AAAAA</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ExpenseTable;