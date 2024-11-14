import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Fetch cart data
    fetch("https://fakestoreapi.com/carts/1")
      .then((res) => res.json())
      .then((data) => {
        setCartData(data.products); // Update cart data state
        return data.products; // Return products to chain the next fetch
      })
      .then((products) => {
        // Fetch product details for each product in the cart
        const productPromises = products.map((p) =>
          fetch(`https://fakestoreapi.com/products/${p.productId}`).then((res) => res.json())
        );

        // Resolve all product fetches
        return Promise.all(productPromises);
      })
      .then((fetchedProducts) => {
        setProducts(fetchedProducts); // Update the products state
      })
      .catch((error) => {
        console.error("Error fetching cart or product data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Your Cart:</h1>
      {products.length > 0 ? (
        products.map((p) => <ProductItem key={p.id} product={p} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CartPage;
