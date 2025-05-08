import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const params = useParams();

  let id = params;
  console.log(id);
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  // Code to run when the component mounts
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Handle success
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }, []);
  console.log(products);

  return (
    <div className="ProductListPage">
      {products.map((each) => {
        return (
          <>
            <article key={each.id}>
              <Link to={`/product/details/${each.id}`}>
                <div className="imageDiv">
                  <img src={each.image} alt="" />
                </div>
                <p>{each.category}</p>
                <p>{each.price}</p>
                <p>{each.title}</p>
              </Link>
            </article>
          </>
        );
      })}
    </div>
  );
}

export default ProductListPage;
