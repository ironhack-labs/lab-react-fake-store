import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function CartPage() {
  const [cartProducts, setCartProducts] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/5`)
      .then((response) => {
        console.log(response.data);
        setCartProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!cartProducts) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="CartPage">
      <h2>Your Cart</h2>
      {cartProducts.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div key={cartProducts.id} className="card">
          <h3>Product Id:{cartProducts.id}</h3>
          <h3>User Id: {cartProducts.userId}</h3>
          <p>Date: {cartProducts.date}</p>
          <h5>Version:{cartProducts._v}</h5>
        </div>
      )}

      <h2>Products</h2>
      {cartProducts.products.map((product) => {
        return (
          <div key={product.productId} className="card">
            <p>Product Id: {product.productId}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        );
        <Link to="/">
          {" "}
          <button>Back to shop</button>
        </Link>;
      })}
    </div>
  );
}

export default CartPage;
