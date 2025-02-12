import { useState, useEffect } from "react";
import axios from "axios";

function CartPage() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with actual cart ID. For now, we use a fixed value (e.g., cart ID 5)
    const cartId = 5;

    // Fetch cart data
    axios
      .get(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => {
        setCart(response.data);
        // Extract productId from the cart
        const productIds = response.data.products.map((item) => item.productId);

        // Fetch all products to get the details for the products in the cart
        return axios.get("https://fakestoreapi.com/products").then((res) => {
          // Filter products based on the productIds
          const filteredProducts = res.data.filter((product) =>
            productIds.includes(product.id)
          );
          return filteredProducts;
        });
      })
      .then((filteredProducts) => {
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading cart...</p>;
  }

  return (
    <div className="CartPage">
      <h1>Your Shopping Cart</h1>
      {cart && cart.products.length > 0 ? (
        <div>
          {cart.products.map((item, index) => {
            const product = products.find((p) => p.id === item.productId);
            return (
              <div key={index} className="cart-item">
                <img src={product.image} alt={product.title} width={150} />
                <div>
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
}

export default CartPage;

