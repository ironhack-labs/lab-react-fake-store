import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <>
            <Link to={`/product/details/${product.id}`}>
              <div className="product">
                <div className="productContainer">
                  <img
                    className="productImage"
                    src={product.image}
                    alt="image of product"
                  />
                </div>
                <div className="productDetails">
                  <div>{product.title}</div>
                  <div>{product.category}</div>
                  <div>{product.price}€</div>
                  <div>{product.description}</div>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default ProductListPage;
