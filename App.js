//shift+alt+f => align the code
import React, { useState } from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const dummy_expenses = [ 
  {
    id: "e1",
    title: "Chocolates",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", 
  title: "Bike", 
  amount: 799.49, 
  date: new Date(2021, 2, 12), 
  },
  {
    id: "e3",
    title: "Cookies",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Netflix",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // Arrow function
  const [expenses,setExpenses]=useState(dummy_expenses);
  

  // return React.createElement( //React Object
  //   "div",//parent
  //   {},//args of the component
  //   React.createElement(Expenses, { items: expenses }) //children
  // );

  const AddExpenseHandler = expenses =>{
    setExpenses((prevExpenses)=>{  //prevState is a built in js function thats get the previous state value
      return [expenses,...prevExpenses]; // we can use spread operator in array too
    });
  }

  return (
    <div>
      <NewExpense  onAddExpense={AddExpenseHandler}/>
      <Expenses items={expenses} /> 
    </div>
  );
}

export default App; //export must give to import
