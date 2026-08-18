import { useEffect, useState } from "react";

function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);
  const cartId = 5; // using mock cart #5

  useEffect(() => {
    // Step 1: Fetch the cart
    fetch(`https://fakestoreapi.com/carts/${cartId}`)
      .then(response => response.json())
      .then(async cartData => {
        // Step 2: Extract product IDs
        const items = cartData.products;

        // Step 3: Fetch details for each product
        const productRequests = items.map(item =>
          fetch(`https://fakestoreapi.com/products/${item.productId}`)
            .then(res => res.json())
            .then(product => ({
              ...product,
              quantity: item.quantity
            }))
        );

        const fullProducts = await Promise.all(productRequests);

        setCartProducts(fullProducts);
      })
      .catch(err => console.log(err));
  }, []);

  if (cartProducts.length === 0) {
    return <p>Loading cart...</p>;
  }

  return (
    <div>
      <h1>Your Cart</h1>

      {cartProducts.map(product => (
        <div key={product.id} className="cart-item">
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} width="120" />
          <p>Price: {product.price} €</p>
          <p>Quantity: {product.quantity}</p>
          <p>Total: {(product.price * product.quantity).toFixed(2)} €</p>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
