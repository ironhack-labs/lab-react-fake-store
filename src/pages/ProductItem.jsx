import React from 'react';
import styles from './ProductItem.module.css';

function ProductItem({ id, title, price, description, category, image, rating, quantity }) {
    return (
      <div className={styles.productItem}>
        <img className={styles.productImage} src={image} alt={title} />
        <div className={styles.productDetails}>
          <h3 className={styles.productTitle}>{title}</h3>
          <p className={styles.productCategory}>{category}</p>
          <p className={styles.productPrice}>${price}</p>
          <p className={styles.productDescription}>{description}</p>

          {quantity > 0 && <p>Quantity: {quantity}</p>}
          {/* Add rating or other elements here */}
        </div>
      </div>
    );
  }
  

export default ProductItem;
