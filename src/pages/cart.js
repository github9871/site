import React from "react";
import { Link } from "gatsby";
import Cart from "../components/Cart";

const CartPage = () => {
  const isClient = typeof window !== "undefined";

  return (
    <div>
      <h1>Shopping Cart</h1>
      {isClient && <Cart />}
      <Link to="/all-products">Continue Shopping</Link>
    </div>
  );
};

export default CartPage;
