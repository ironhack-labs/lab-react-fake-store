import { Link } from "react-router-dom";
import { format } from "date-fns";

import Cart from "../assets/cart.png";
import Profile from "../assets/profile-icon.png";

function CartCard({ cart }) {
  const isoDate = cart.date;
  const formattedDate = format(new Date(isoDate), "PPPPP");

  return (
    <Link to={`/carts/${cart.id}`}>
      <div className="row d-flex align-items-center border rounded m-2 bg-light">
        <img
          className="col-3 img-thumbnail rounded m-3 bg-dark"
          src={Cart}
          alt="..."
          style={{ width: "7.5rem", height: "7.5rem", objectFit: "contain" }}
        />
        <img
          className="col-3 img-thumbnail rounded m-3"
          src={Profile}
          alt="..."
          style={{ width: "7.5rem", height: "7.5rem", objectFit: "contain" }}
        />
        <h6 className="col-2 fw-bold">Cart no: {cart.id}</h6>
        <p className="col-2 fw-medium">User id: {cart.userId}</p>
        <p className="col-1 fw-medium">Type: {cart.products.length}</p>
        <p className="col-1 fw-medium">
          Qty: {cart.products.reduce((acc, item) => acc + item.quantity, 0)}
        </p>
        <p className="col fw-medium">
          Date of creation:
          <br />
          {formattedDate}
        </p>
      </div>
    </Link>
  );
}

export default CartCard;
