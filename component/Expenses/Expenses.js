import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [Filterdate, setFilterDate] = useState("2020"); //Two way binding we set the Filterdate as 2020

  const dateFilterHandler = (selectedYear) => {
    setFilterDate(selectedYear);
  };
  const filteredYear = props.items.filter((expense) => {
    // filter is a function that filter the same
    return expense.date.getFullYear().toString() === Filterdate; // condition to check the year
  });

  /* {filteredYear.length === 0 && <p>No expense is added</p> } //noramlly in js if condition is true aftr the && is displayed */

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectYear={Filterdate} // return the state old to the Expensefilter JS
        dateFilter={dateFilterHandler} //get the new state value from the ExpenseFilter JS
      />
      <ExpenseChart expenses={filteredYear} />
      <ExpenseList items={filteredYear} />
    </Card>
  );
};

export default Expenses;
