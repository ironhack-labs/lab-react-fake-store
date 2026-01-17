import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);


  // useEffect runs code after component loads (mounts)
  useEffect(() => {
    // fetch products from API
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        // save products in state
        setProducts(response.data);
      })
      .catch((error) => {
        // show error in console
        console.log(error);
      });
  }, []); // [] means only run once


  return (
    <div className="ProductListPage">
      {/* Loop through products and show title */}
      {products.map((product) => (
        <div key={product.id}>
          {/* Link to product details page */}
          <Link to={`/product/details/${product.id}`}>
            {product.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
