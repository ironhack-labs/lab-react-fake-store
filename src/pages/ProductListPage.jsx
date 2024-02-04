import { useState, useEffect } from "react";
import axios from "axios";
import './productListPage.css'
import { Link } from "react-router-dom";


function ProductListPage() {
  const [products, setProducts] = useState([]);

useEffect(() => {
  axios.get('https://fakestoreapi.com/products')
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
    
        {products.map(product => (
          <Link to={`/product/details/${product.id}`}>
          <li key={product.id}>
          
          <img src= {product.image}></img><br />
          <strong className="title"></strong> {product.title}<br />
            <strong className="price"></strong> {product.price}<br />
            <strong className="description"></strong> {product.description}<br />
            <strong className="category"></strong> {product.category}<br />
            <strong>Rating:</strong> {product.rating.rate} (Count: {product.rating.count})<br />
           
            </li>
             </Link>
        ))}
       
      </ul>
    </div>
  );
}

export default ProductListPage;
