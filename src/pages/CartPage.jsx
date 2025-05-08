import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [chart, setChart] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts/1");
      if (response.ok) {
        const jsonData = await response.json();
        setChart(jsonData);
        console.log("Json data is fetched", jsonData);
        // Fetch products only if they are not already loaded
        if (products.length === 0) {
          await fetchProducts(jsonData.products);
        }
      } else {
        throw new Error("Failed to fetch data response isn't ok");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchProduct = async (productId, quantity) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        const productWithQuantity = { ...jsonData, quantity };
        return productWithQuantity;
      } else {
        throw new Error("Failed to fetch data response isn't ok");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const fetchProducts = async (productsData) => {
    try {
      const productPromises = productsData.map((product) =>
        fetchProduct(product.productId, product.quantity)
      );
      const resolvedProducts = await Promise.all(productPromises);
      // Filter out any null values (failed fetches)
      const validProducts = resolvedProducts.filter((product) => product !== null);
      setProducts(validProducts);
      console.log("All products fetched:", validProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {products.map((product) => (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <li>
              <img src={product.image} alt="Product image" />
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
