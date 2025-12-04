import logo from "./../assets/logo-ironhack-blue.png";
import cart from "./../assets/cart.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between h-20 items-center px-4">

        <div className="flex items-center w-1/4">
          <Link to="/">
            <img src={logo} alt="Ironhack Logo" className="h-10" />
          </Link>
        </div>

        <div className="flex justify-center w-1/2">
          <span className="text-xl">React Fake Store</span>
        </div>

        <div className="w-1/4 flex justify-end">
          <Link to="/cart">
            <img
              src={cart}
              alt="Cart icon"
              className="h-10 border border-white p-1 rounded-full"
            />
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

