import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(apiURL)
      .then((response) => {
        setProducts(response.data);
    })

    .catch((err) => {
      console.log(err);
      setProducts(false);
    })
  }, [] );


  return (
    <div className="ProductListPage">

    {products.map((product) => (
     <Link key={product.id} to={`/product/details/${product.id}`} > 
        <div className="card">
          <img src={product.image} alt= "product image" style={{height:"200px"}} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>{product.category}</h3>
          <h3>{product.price}</h3>
        </div>
      </Link>
    ))}
  </div>
  );
}

export default ProductListPage;
