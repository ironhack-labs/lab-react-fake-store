import { useEffect, useState } from "react";
import axios from 'axios'
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
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('error to search products', error);
      });
  }, []);


  return (
    <div className="ProductListPage">
      {products.map((productObj) => (
        <div key={productObj.id} className="product">
          <Link to={`/product/details/${productObj.id}`}>
            <h3>{productObj.title}</h3>
          </Link>
          <p>Price: {productObj.price}</p>
          <p>Description: {productObj.description}</p>
          <p>Category: {productObj.category}</p>
          <p>Image: {productObj.image}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
