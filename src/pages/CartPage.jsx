import { useState, useEffect } from "react";

function CartPage() {
  const [cart, setCart] = useState(null); // State to store cart data
  const [products, setProducts] = useState([]); // State to store product details
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch the cart data and product details when the component mounts
  useEffect(() => {
    // Replace `5` with the cart id you want to test with (e.g., user-specific cart ID)
    const cartId = 5;

    // Fetch the cart
    fetch(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => response.json())
      .then((cartData) => {
        setCart(cartData); // Store cart data

        // Extract product IDs from the cart data
        const productIds = cartData.products.map((product) => product.productId);

        // Fetch details for each product in the cart
        const productFetches = productIds.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
            response.json()
          )
        );

        // Wait for all product details to be fetched
        Promise.all(productFetches)
          .then((fetchedProducts) => {
            setProducts(fetchedProducts); // Store product details
            setLoading(false); // Set loading to false when all data is fetched
          })
          .catch((error) => {
            console.error("Error fetching product details:", error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
        setLoading(false);
      });
  }, []);

  // Show a loading message while the data is being fetched
  if (loading) {
    return <p>Loading cart...</p>;
  }

  // If the cart is empty or not found, display a message
  if (!cart || products.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  // Render the list of products in the cart
  return (
    <div className="CartPage">
      <h1>Your Shopping Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const cartProduct = cart.products.find(
              (p) => p.productId === product.id
            );
            return (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                </td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{cartProduct.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CartPage;
