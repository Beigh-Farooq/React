import React from "react";
import { useCart } from "../context/Cart";

const Cart = () => {
  const cart = useCart()

  const total = cart.items.reduce((a, b) => a + (parseFloat(b.price) || 0), 0);  // Convert price to number

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart && cart.items.map((item, index) => {
        return (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        );
      })}
      <h5>Total Bill: ${total}</h5>
    </div>
  );
};

export default Cart;
