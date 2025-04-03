import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CartPage() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Usaré el carrito con ID 5 por defecto
    fetch("https://fakestoreapi.com/carts/5")
      .then(response => response.json())
      .then(data => {
        setCart(data);
        // Ahora obtenemos los detalles de todos los productos
        return fetch("https://fakestoreapi.com/products");
      })
      .then(response => response.json())
      .then(allProducts => {
        setProducts(allProducts);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching cart or products:", error);
        setLoading(false);
      });
  }, []);

  // Función para encontrar los detalles de un producto
  const findProduct = (productId) => {
    return products.find(product => product.id === productId);
  };

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    if (!cart || !products.length) return 0;
    
    return cart.products.reduce((total, item) => {
      const product = findProduct(item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0).toFixed(2);
  };

  if (loading) {
    return <div>Loading cart...</div>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart && (
        <>
          <p>Cart ID: {cart.id}</p>
          <p>User ID: {cart.userId}</p>
          <p>Date: {new Date(cart.date).toLocaleDateString()}</p>
          
          <h2>Products in Cart</h2>
          {cart.products.map((item) => {
            const product = findProduct(item.productId);
            return product ? (
              <div key={item.productId}>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} width="50" />
                <p>Price: ${product.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${(product.price * item.quantity).toFixed(2)}</p>
              </div>
            ) : (
              <p key={item.productId}>Product ID: {item.productId} (details not available)</p>
            );
          })}
          
          <h3>Total: ${calculateTotal()}</h3>
          
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartPage; 