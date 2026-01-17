import { useState, useEffect } from "react";
import axios from "axios";

function CartPage() {
  // cartProducts will store the products in the cart
  const [cartProducts, setCartProducts] = useState([]);
  // allProducts will store all product details
  const [allProducts, setAllProducts] = useState([]);

  // useEffect to fetch cart and all products
  useEffect(() => {
    // get cart with id 1 (can be any id)
    axios.get("https://fakestoreapi.com/carts/1")
      .then((cartRes) => {
        // get all products
        axios.get("https://fakestoreapi.com/products")
          .then((prodRes) => {
            setAllProducts(prodRes.data);
            // get product ids in cart
            const cartItems = cartRes.data.products;
            // find product details for each id
            const productsInCart = cartItems.map((item) => {
              // find product by id
              return prodRes.data.find((p) => p.id === item.productId);
            });
            setCartProducts(productsInCart);
          });
      });
  }, []);

  return (
    <div className="CartPage">
      {/* Show products in cart */}
      <h2>Cart</h2>
      {cartProducts.map((product, i) => (
        <div key={i}>
          {/* product info */}
          <h3>{product?.title}</h3>
          <img src={product?.image} alt={product?.title} width="80" />
          <p>Price: ${product?.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
