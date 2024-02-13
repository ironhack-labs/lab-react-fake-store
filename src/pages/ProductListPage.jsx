import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
         .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
  }, [])


  return (
    <div className="ProductListPage">
      {products && products.map((product) => {
        return (
          <article>
            <div key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>{product.category}</p>
              <p>{product.description}</p>
              <img src={product.image}/>
            </Link>
            </div>
          </article>
        )
      })}
    </div>
  );
}

export default ProductListPage;
