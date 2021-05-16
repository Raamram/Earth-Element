import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expense.css";

const Expense = (props) => {
  const [updatedYear, filteredYear] = useState("2020");

  const filterYearChange = (selectedYear) => {
    filteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={updatedYear} onYearChange={filterYearChange} />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expense;
