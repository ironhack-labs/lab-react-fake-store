import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link
            to={`/product/details/${product.id}`}
            key={product.id + product.title}
          >
            <div key={product.id} className="product-wrapper">
              <div className="img-wrapper">
                <img src={product.image} />
              </div>

              <p>{product.price}</p>
              <p>{product.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
