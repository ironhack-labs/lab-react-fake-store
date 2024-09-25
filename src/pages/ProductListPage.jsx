import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]); // is empty array fine or is null better?

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {

    axios.get('https://fakestoreapi.com/products') // from documentation // fetches products from API
    .then(response => {
      setProducts(response.data)

      console.log(response.data)
    })

    .catch(error => {
      console.log(error)
    })


  }, []) // empty array -> useEffect will only run once after the component mounts


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map(product => (
        <div className='ProductCard' key={product.id}>
          <Link to={`/product/details/${product.id}`}>
            <img src={product.image} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
