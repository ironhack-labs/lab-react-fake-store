import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem'; 
import styles from './ProductDetailsPage.module.css'; 

function CartPage() {
  // Mockup data for cartID
  let cartID = 5;
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/${cartID}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart details.');
      }
      const cartData = await response.json();

      const productPromises = cartData.products.map(item =>
        fetch(`https://fakestoreapi.com/products/${item.productId}`).then(res => res.json())
      );

      const productsDetails = await Promise.all(productPromises);

      const cartItemsWithDetails = productsDetails.map((product, index) => ({
        ...product,
        quantity: cartData.products[index].quantity,
      }));

      setCartItems(cartItemsWithDetails);
    } catch (error) {
      console.error("Error fetching cart details:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className={styles.productListContainer}>
      {cartItems.map(item => (
        <Link key={item.id} to={`/product/details/${item.id}`} className={styles.productLink}>
          {/* Pass the quantity to the ProductItem */}
          <ProductItem {...item} quantity={item.quantity} />
        </Link>
      ))}
    </div>
  );
}

export default CartPage;
