import { useRef, useState } from "react";
import Input from "../UI/Input";

import classes from "./OrderItemForm.module.css"

const OrderItemForm = (props) => {

  const [amountValid, setAmountValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmount > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default OrderItemForm;