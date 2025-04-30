import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((oneProduct) => {
        return (
          <Link to={`/product/details/${oneProduct.id}`}>
            <div key={oneProduct.id} className="card">
              <div className="content">
                <img src={oneProduct.image} alt="" />
              </div>
              <div className="content.shifted">
                <p>{oneProduct.title}</p>
                <p>{oneProduct.category}</p>
                <p>${oneProduct.price}</p>
                <p>{oneProduct.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
