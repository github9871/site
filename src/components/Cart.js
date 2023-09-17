import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {

    
    const [email, setEmail] = useState("");
    const cart = useSelector((state) => state.cart);
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleCheckout = async (event) => {
      event.preventDefault();
  
      const response = await fetch("/.netlify/functions/sendCartEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, cart }),
      });
  
      if (response.ok) {
        alert("Shopping cart info has been sent.");
      } else {
        alert("An error occurred. Please try again.");
      }
    };

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={() => alert("Checkout functionality not implemented.")}>
        Proceed to Checkout
      </button>
      <form onSubmit={handleCheckout}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Proceed to Checkout</button>
      </form>
    </div>
  );
};

export default Cart;