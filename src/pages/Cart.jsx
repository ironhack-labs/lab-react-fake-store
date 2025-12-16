import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  // Fetch the cart data and all products
  useEffect(() => {
    // Fetch cart data
    fetch("https://fakestoreapi.com/carts/6")
      .then((response) => response.json())
      .then((data) => {
        console.log("Cart data:", data);
        setCart(data);
      })
      .catch((error) => console.error("Error fetching cart:", error));

    // Fetch all products
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Products data:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Match cart items with product details
  useEffect(() => {
    if (cart && cart.products && products.length > 0) {
      const cartItems = cart.products.map((cartItem) => {
        const productDetails = products.find(
          (product) => product.id === cartItem.productId
        );
        return {
          ...productDetails,
          quantity: cartItem.quantity,
        };
      });
      setCartProducts(cartItems);
    }
  }, [cart, products]);

  // Calculate total price
  const totalPrice = cartProducts.reduce((total, item) => {
    return total + (item.price || 0) * (item.quantity || 0);
  }, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart && (
        <div>
          <h1>Cart id: {cart.id}</h1>
          <p>Cart userId: {cart.userId}</p>
          <p>Date of order: {new Date(cart.date).toLocaleDateString()}</p>
        </div>
      )}

      {cartProducts.length > 0 ? (
        <div className="products-cart">
          <p>Number of products: {cartProducts.length}</p>
          <h3>Items in Cart:</h3>
          {cartProducts.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px", height: "100px", objectFit: "contain" }}
              />
              <div>
                <h4>{item.title}</h4>
                <p>Category: {item.category}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  <strong>
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </strong>
                </p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      ) : (
        <p>Loading cart items...</p>
      )}
    </div>
  );
}
export default Cart;
