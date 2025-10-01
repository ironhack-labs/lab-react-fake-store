import { useEffect, useState } from "react";
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
        console.log("data complete");
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product, i, arr) => {
        console.log(product);
        return (
          <Link to={`/product/details/${product.id}`}>
            <div className="product">
              <div className="caja">
                <img src={product.image}></img>
              </div>
              <div className="caja">
                <h2 className="titulo">{product.title}</h2>
              </div>
              <div className="caja">
                <p>{product.category}</p>
              </div>
              <div className="caja">
                <p>${product.price}</p>
              </div>
              <div className="caja">
                <p>{product.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
