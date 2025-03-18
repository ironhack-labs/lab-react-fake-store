import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  // Code to run when the component mounts
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(({ data }) => {
        // Handle success
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }, []);

  //  ^ [] Means the effect will run only once, when the component mounts

  return (
    <div className="ProductListPage">
      {
        /* Render list of products here */
        products.map((oneProduct) => (
          <Link key={`product_${oneProduct.id}`} to={`/product/details/${oneProduct.id}`}>
            <article
              className="card flex-center text-center"
            >
              <img
                src={oneProduct.image}
                alt={oneProduct.title}
                height="auto"
                width="200"
              />
              <p className="">{oneProduct.title}</p>
              <p className="">{oneProduct.category}</p>
              <p className="">${oneProduct.price}</p>
              <p className="">{oneProduct.description}</p>
            </article>
          </Link>
        ))
      }
    </div>
  );
}

export default ProductListPage;
