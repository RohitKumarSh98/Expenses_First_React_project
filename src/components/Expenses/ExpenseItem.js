import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <div className="expense-item__price">Rs. {props.amount} </div>
    </Card>
  );
}

export default ExpenseItem;
