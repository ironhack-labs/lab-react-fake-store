import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h2>React Fake Store</h2>
      <div className="cart-section">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-icon">
          🛒 Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
