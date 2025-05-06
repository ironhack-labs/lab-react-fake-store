import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        setProducts(jsonResponse);
      })
      .catch((error) => {
        error;
      });
  }, []);

  return (
    <div className="HomePageList">
      <h2> List of products</h2>
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <ul>
              <li> {product.title} </li>
              <li> {product.price} </li>
              <li> {product.cathegory} </li>
              <li>
                {" "}
                <img src={product.image} alt="productImage" />{" "}
              </li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
