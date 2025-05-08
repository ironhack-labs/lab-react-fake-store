import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState();

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(({data}) => setProducts(data))
      .catch(e => console.log(e))
  }, []);

  return (
    <div className="ProductListPage">
      {products && 
        products.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <Link to={`product/details/${product.id}`}>
                <img src={product.image} alt="Product Image" />
                <p><strong>{product.title}</strong></p>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
              </Link>
            </div>
          )
        })}
    </div>
  );
}

export default ProductListPage;
