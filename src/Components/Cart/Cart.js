import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "pizza", amount: 3, price: 485 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>1455</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;