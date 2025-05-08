import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function CartPage() {
  // const [cart, setCart] = useState({});
  const { cartId } = useParams();
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch cart data and retrieve product IDs
    axios
      .get(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => {
        setCart(response.data);
        const productIds = response.data.products.map((item) => item.productId);
        return productIds;
      })
      .then((productIds) => {
        // Fetch details for each product ID
        const productRequests = productIds.map((id) =>
          axios.get(`https://fakestoreapi.com/products/${id}`)
        );
        // Resolve all promises to get all product details
        return Promise.all(productRequests);
      })
      .then((responses) => {
        // Set the state with detailed product data
        const productDetails = responses.map((res) => res.data);
        setProducts(productDetails);
      })
      .catch((error) => {
        console.error("Error fetching cart details:", error);
        setError("No items in the cart.");
      });
  }, [cartId]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {products.length ? (
        <div>
          <div className="container d-flex justify-content-between">
            <h2 className="h5 fw-bolder">Cart id: {cart.id}</h2>
            <h1 className="text-center">Products in the cart</h1>
            <h2 className="h5 fw-bolder">User id: {cart.userId}</h2>
          </div>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
              <p className="ms-5 fw-semibold">
                Quantity: {cart.products.filter((e) => e.productId == product.id)[0].quantity}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <span className="spinner-border"></span>
          <span className="h1">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default CartPage;
