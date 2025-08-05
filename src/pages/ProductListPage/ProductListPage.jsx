import styles from "./ProductListPage.module.css";
import { Link } from "react-router-dom";

function ProductListPage({ products }) {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).

  return (
    <div className={styles.ProductListPage}>
      {/* Render list of products here */}
      {products.map((product) => {
        return (
          <Link
            to={`/product/details/${product.id}`}
            key={product.id}
            className={styles.individualProducts}
          >
            <img src={product.image} />
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
