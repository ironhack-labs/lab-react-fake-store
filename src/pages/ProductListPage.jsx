import styles from './ProductListPage.module.css';
import ProductItem from './ProductItem';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        // Throw an error with a custom error message
        throw new Error('Failed to fetch products.');
      }
      const productsData = await response.json();
      setProducts(productsData);
      // console.log(productsData)
    } catch (error) {
      // Log the error or set an error state to be displayed
      console.error("Error fetching data:", error);
      setErrorMessage(error.message || 'Unknown error occurred.');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.productListContainer}>
      {products.map(product => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <ProductItem {...product} />
        </Link>
      ))}
    </div>
  );

}

export default ProductListPage;
