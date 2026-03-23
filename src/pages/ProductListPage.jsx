import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(() => {
axios
.get(`https://fakestoreapi.com/products`)
.then((response) => {
  console.log(response.data);
  setProducts(response.data);
})
.catch((error) => {
  console.log(error);
});
}, []);


  return (
    <div className="ProductListPage">
     {products.map((eachProduct) => {
        return (
          <Link
            className="product-list"
            key={eachProduct.id}
            to={`/product/details/${eachProduct.id}`}
          >
            <img src={eachProduct.image} alt="image" />
            <h3>{eachProduct.title}</h3>
            <p>{eachProduct.category}</p>
            <p>{eachProduct.price}</p>
          </Link>
        );
})}
    </div>
  );
}

export default ProductListPage;
