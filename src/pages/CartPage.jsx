import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CartPage() {
  const { cartId } = useParams(); 
  const [cart, setCart] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);


  useEffect(() => {
    if (!cartId) return; 

    const fetchCart = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/carts/${cartId}`
        );
        const data = await response.json();
        setCart(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [cartId]);

  useEffect(() => {
    if (cart && cart.products) {
      const fetchProducts = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const allProducts = await response.json();
          const productsWithDetails = cart.products.map((cartItem) => {
            const productDetail = allProducts.find(
              (product) => product.id === cartItem.productId
            );
            return { ...productDetail, quantity: cartItem.quantity };
          });
          setCartProducts(productsWithDetails);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };

      fetchProducts();
    }
  }, [cart]);

  return (
    <div className="CartPage">
      <h2>Shopping Cart (Cart ID: {cartId})</h2>
      {cartProducts.length > 0 ? (
        <ul className="cart-products">
          {cartProducts.map((product) => (
            <li key={product.id} className="cart-product">
              <img
                src={product.image}
                alt={product.title}
                style={{ height: "100px", width: "auto" }}
              />
              <div className="cart-details">
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading cart details...</p>
      )}
    </div>
  );
}

export default CartPage;
