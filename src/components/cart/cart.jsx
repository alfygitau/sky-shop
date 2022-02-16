import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/Actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart());
  };

  return (
    <div>
      This is the cart
      <button onClick={handleRemoveFromCart}>Remove</button>
    </div>
  );
};

export default Cart;
