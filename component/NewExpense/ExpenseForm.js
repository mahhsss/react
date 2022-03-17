import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [Enteredtitle, setTitle] = useState("");
  const [EnteredAmount, setAmount] = useState("");
  const [EnteredDate, setDate] = useState("");

  // let [userInput,setInput]=useState({     //multiple use State
  //     Enteredtitle:'',
  //     EnteredAmount:'',
  //     EnteredDate:''
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setInput({   // multi state
    //     ...userInput,
    //     Enteredtitle:event.target.value,
    // });
    // setInput=(prevState)=>{
    //     return { ...prevState,Enteredtitle:event.target.value};  //best way to same the pervious state
    // }
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    console.log(setAmount);
    // setInput({
    //     ...userInput,
    //     EnteredAmount:event.target.value,
    // });
    // setInput=(prevState)=>{
    //     return { ...prevState,EnteredAmount:event.target.value};
    // }
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setInput({
    //     ...userInput,
    //     EnteredDate:event.target.value,
    // });
    // setInput=(prevState)=>{
    //     return { ...prevState,EnteredDate:event.target.value};
    // }
  };
  const submitHandler = (event) => {
    event.preventDefault(); // prevent the page reload
    const expenseData = {
      title: Enteredtitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };

    props.onSaveExpenseData(expenseData); // use the child-parent component communition if we pass an args we must pass props in that func
    setTitle("");
    setAmount("");
    setDate("");
  };

  // when we use the submit event listener it will automactically reload the page that is its send a request to server to prevent that we use "event.preventDefault();"

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter the Title"
            value={Enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input
            type="number"
            placeholder="Enter the Amount"
            value={EnteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={EnteredDate}
            min="2019-01-01"
            max="2023-10-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
