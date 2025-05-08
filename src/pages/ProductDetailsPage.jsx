import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './ProductDetailsPage.module.css';

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams(); // This line extracts productId from the URL

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details.');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
        // Handle the error state here if necessary
      }
    }

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]); // The effect runs whenever the productId changes

  return (
    <div className={styles.ProductDetailsPage}>
      {product.id ? (
        <div className={styles.productDetailCard}>
          <img className={styles.productImage} src={product.image} alt={product.title} />
          <h2 className={styles.productTitle}>{product.title}</h2>
          <div className={styles.productInfo}>
            <strong>Category:</strong> {product.category}
          </div>
          <div className={styles.productInfo}>
            <strong>Price:</strong> ${product.price}
          </div>
          <div className={`${styles.productInfo} ${styles.productDescription}`}>
            <strong>Description:</strong> {product.description}
          </div>
          <div className={`${styles.productInfo} ${styles.productRating}`}>
            <strong>Rating:</strong>
            {product.rating && `${product.rating.rate} (${product.rating.count} reviews)`}
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
