import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/all-products">Products</Link>
    </li>
    <li>
      <Link to="/cart">Cart</Link>
    </li>
  </ul>
</nav>

);

export default Navbar;