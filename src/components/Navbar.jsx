// src/components/Navbar.jsx
import logo from "./../assets/logo-ironhack-blue.png";
import cart from "./../assets/cart.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT: LOGO */}
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Ironhack logo" className="navbar-logo" />
        </Link>
      </div>

      {/* CENTER: TITLE */}
      <div className="navbar-center">
        <span className="navbar-title">React Fake Store</span>
      </div>

      {/* RIGHT: CART ICON */}
      <div className="navbar-right">
        <Link to="/cart">
          <img 
            src={cart} 
            alt="Cart icon" 
            className="navbar-cart" 
          />
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;
