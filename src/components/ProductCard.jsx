import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  let location = useLocation();
  return (
    <div>
      <Link key={product.id} to={`/product/details/${product.id}`}>
        <div className="product-card card">
          <img
            src={product.image}
            alt={product.image}
            style={{ height: "150px" }}
          />
          <b>{product.title}</b>
          <p>{product.category}</p>
          <b>${product.price}</b>
          {location.pathname !== "/" ? (
            <p>{product.description}</p>
          ) : (
            <p>{product.description.slice(0, 100)}...</p>
          )}
          {/* <button
          onClick={(event) => {
            onDelete(event, product.id);
          }}
        >
          Delete
        </button> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
