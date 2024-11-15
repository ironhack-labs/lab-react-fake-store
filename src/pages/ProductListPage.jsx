import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage({ products }) {
  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div className="product-item">
              <img
                src={product.image}
                alt="Product Image"
                className="product-list-image"
              />
              <h2 className="product-list-title">{product.title}</h2>{" "}
              <span className="product-list-category">{product.category}</span>
              <span className="product-list-price">${product.price}</span>
              <span className="product-list-description">
                {product.description.slice(0, 100)}...
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
