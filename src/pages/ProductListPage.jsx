import { useState, useEffect } from "react";
import axios from "axios";
import './productListPage.css'
import { Link } from "react-router-dom";


function ProductListPage() {
  const [products, setProducts] = useState([]);

const apiUrl = "https://fakestoreapi.com/products"

useEffect(() => {
  axios.get(apiUrl)
  .then(response => {
    console.log(response.data);
    setProducts(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
 }, []);

console.log(products);

  return (
    <div className="ProductListPage">
      <ul>
    
        {products.map((product => (
          
          <li key={product.id} className="Link">
            <Link to={`/product/details/${product.id}`} >
            <div className="product">
              <img src= {product.image}></img><br />
              <strong className="title"></strong> {product.title}<br />
              <strong className="price"></strong> {product.price}<br />
              <strong className="description"></strong> {product.description}<br />
              <strong className="category"></strong> {product.category}<br />
              <strong>Rating:</strong> {product.rating.rate} (Count: {product.rating.count})<br />
              </div>
            </Link>
            </li>
             
        )))}
       
      </ul>
    </div>
  );
}

export default ProductListPage;
