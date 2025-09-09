import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  
  const apiURL = "https://fakestoreapi.com/products"
  const [fetching, setFetching] = useState (true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
      setFetching(false)
    });
  },[]);
  return (
    <div className="ProductListPage">
    {fetching}
      {products.map((prod) => {
        return (
          <div 
            key={prod.id} 
            className="card clickable-card"
            onClick={() => navigate(`/product/details/${prod.id}`)}
          >
          <img src={prod.image} alt="product" />
          <div className="card-text">
            <h2>{prod.title}</h2>
            <p>{prod.category}</p>
            <p>${prod.price}</p>
            <p>{prod.description}</p>
          </div>
          </div>
        )
      })}
    </div>
  );
}

export default ProductListPage;
