import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CartPage() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  // The `cartId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const { cartId } = useParams();
  const navigate = useNavigate();
  // To fetch the cart details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => response.json())
      .then((cartData) => {
        setCart(cartData);

        // Fetch product details for each item in the cart
        const productPromises = cartData.products.map((item) =>
          fetch(`https://fakestoreapi.com/products/${item.productId}`)
            .then((response) => response.json())
            .then((productData) => ({
              ...productData,
              quantity: item.quantity,
            }))
        );
        Promise.all(productPromises).then((products) => {
          setProducts(products);
        });
      })
      .catch((error) => console.error("Error fetching cart details:", error));
  }, [cartId]);

  if (!cart || !products.length) {
    return <div className="loading">Loading cart...</div>;
  }

  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="CartPage">
      <h1>Shopping Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {products.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div className="cart-item-details">
                <h3>{product.title}</h3>
                <p className="category">{product.category}</p>
              </div>
              <div className="cart-item-quantity">
                <span>Qty: {product.quantity}</span>
              </div>
              <div className="cart-item-price">
                <p className="price">${product.price}</p>
                <p className="subtotal">
                  Subtotal: ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>
              Items ({products.reduce((sum, p) => sum + p.quantity, 0)})
            </span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="btn btn-primary btn-checkout">
            Proceed to Checkout
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
