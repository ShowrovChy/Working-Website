import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  const total = cart.reduce((previous, current) => previous + current.price, 0);
  const Shipping = total > 0 ? 15 : 0;
  const Tax = (total + Shipping) * 0.1;
  const GrandTotal = total + Shipping + Tax;

  const totalQuantity = cart.reduce((prev, curr) => prev + curr.quantity, 0);
  /*   let total = 0;
  for (const item of cart) {
    total = total + item.price;
  } */

  return (
    <div className="cart-box">
      <h2>Order Summary </h2>
      <h3>Items Ordered :{totalQuantity} </h3>
      {/* <h3>Items Ordered :{cart.length} </h3> */}
      <h3>Total : {total.toFixed(2)}</h3>
      <h3>Shipping : {Shipping} </h3>
      <h3>Tax : {Tax.toFixed(2)} </h3>
      <h3>Total Amount : {GrandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
