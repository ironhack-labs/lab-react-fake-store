import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Cart() {
  const { cartId } = useParams(); // Get cartId from URL parameters
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the cart data using the cartId from URL
    axios
      .get(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => {
        setCart(response.data);
        // Fetch details for each product in the cart
        const productRequests = response.data.products.map((product) =>
          axios.get(`https://fakestoreapi.com/products/${product.id}`)
        );
        return Promise.all(productRequests);
      })
      .then((responses) => {
        setProducts(responses.map((res) => res.data));
      })
      .catch((error) => {
        console.error("Error fetching cart data", error);
      });
  }, [cartId]);

  return (
    <div className="CartPage">
      {products.map((product) => {
        return (
          <Link to={`./product/details/${cart.id}`}>
            <div key={product.id} className="card">
              <img src={product.image} alt="product image" className="img" />
              <h2>{product.title}</h2>
              <h4>{product.category}</h4>
              <p>$ {product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
