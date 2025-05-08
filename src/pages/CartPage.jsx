import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function CartPage() {
  const [cart, setCart] = useState(null);
  const [productId, setProductId] = useState(0);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const randInt = Math.floor(Math.random() * 7 + 1);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/${randInt}`)
      .then((result) => {
        setCart(result.data);
        setProductId(result.data.products[0].productId);
        setQuantity(result.data.products[0].quantity);
        console.log(result.data.products[0].productId);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((result) => {
        setProduct(result.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  if (!cart) {
    // Render a loading state while product data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="card">
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>
          Quantity: {quantity}
          <br />
          Price: ${product.price}
        </p>
      </div>
      <h3>Total cart value: ${product.price * quantity}</h3>
    </div>
  );
}

export default CartPage;
