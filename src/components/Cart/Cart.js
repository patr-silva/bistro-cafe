import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";
import { useContext, useState } from "react";
import CartContext from "../../store/cartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [checkOut, setCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const showCheckOutHandler = (event) => {
    setCheckOut(true);
  };

  const sumbitDataHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      process.env.REACT_APP_FIREBASE_URL,
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((elem) => {
        return (
          <CartItem
            key={elem.id}
            name={elem.name}
            amount={elem.amount}
            price={elem.price}
            onRemove={cartItemRemoveHandler.bind(null, elem.id)}
            onAdd={cartItemAddHandler.bind(null, elem)}
          />
        );
      })}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes["button--alt"]} onClick={showCheckOutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
   {  !checkOut &&  (<>{" "}
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div> </>) }
      {checkOut && (
        <CheckOut
          onCancel={props.onHideCart}
          onSubmitData={sumbitDataHandler}
        />
      )}
      {!checkOut && modalActions}
    </>
  );



  const didSubmitModalContent = (
    <>
      <p>Thank you! Your order has been successfully completed!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
    {!isSubmitting && !didSubmit && cartModalContent}
     {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
