import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //In enteredExpenseDate we get the expenseData obj in the child component(ExpenseFrom.js)
    //Math.random() generate a random num

    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData); //it will send the expenseData to the pointer function in App.js
    setisEditing(false); //To reset 
  };

  const [isEditing, setisEditing] = useState(false);

  const editingHandler = () => {  
    setisEditing(true); //If add expense button clicked it'll true
  };
  const StopEditing = () => {
    setisEditing(false); //If cancel button clicked 
  };

  //Custom props should have any name // Props points the function with args(onSaveExpenData)

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}> Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={StopEditing} //pointer function
        />
      )}
    </div>
  );
};

export default NewExpense;
