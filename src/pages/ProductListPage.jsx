import { useEffect, useState } from "react";
import axios from "axios"

const apiURL = "https://fakestoreapi.com/products"

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true)

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
      setFetching(false);
    });
  }, []);
   
  


  return (
    <div className="ProductListPage">
    {fetching && <p>Loading...</p>}
      {products.map((product) => {
        return (
        <div key={product.id}>
          <img src={product.image} alt="image" />
          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
        </div>
        )
      })/* Render list of products here */}
    </div>
  );
}

export default ProductListPage;
