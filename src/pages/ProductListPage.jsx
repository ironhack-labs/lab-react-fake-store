import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
    .get('https://fakestoreapi.com/products')
    .then((response) => {
      setProducts(response.data);
    })
    .catch((e) => {
      console.log('Error getting products from the API')
    })
  }, [])

  return (
    <div className="ProductListPage">
      {products.map(product => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <div className="card">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
