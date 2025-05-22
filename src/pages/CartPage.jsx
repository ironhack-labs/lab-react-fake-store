import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/carts/5');
        const cartData = await res.json();

        const productDetails = await Promise.all(
          cartData.products.map(async (item) => {
            const productRes = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
            const productData = await productRes.json();
            return {
              ...productData,
              quantity: item.quantity,
            };
          })
        );
        setCartItems(productDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} style={{ width: '100px' }} />
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}

      <Link to={`/`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Go Back to add more Products</button>
      </Link>
    </div>
  );
}

export default Cart;