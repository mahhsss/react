import "./ExpenseList.css";
import Exp from "./ExpenseItem";


const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense is found</h2>;
  }

  //map is used to render the value of the copy
  // {dynamic condition}

  return (
    <ul className="expenses_list">
      {props.items.map((expense) => ( 
        <Exp
          key={expense.id} // This Key is very important that helps the html and says it unique in case we dont use it we have a error "key"
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
