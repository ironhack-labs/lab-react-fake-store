import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom"

function ProductListPage() {
  // State to store the list of products
  const [products, setProducts] = useState([]);

  // Fetch the products when the component mounts
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log('Error fetching products:', error);
      });
  }, []);

  return (
    <div >
      <h1>List of products: {products.length}</h1>
      
      {products.map((productObj) => {
        return (
          <Link to ={`/product/details/${productObj.id}`}>
          <div className="homepage" key={productObj.id}>
            <img className = "image" src = {productObj.image}/>
            <p><strong></strong> {productObj.title}</p>
            <p><strong>Category:</strong> {productObj.category}</p>
            <p><strong>Price:</strong> {productObj.price} €</p>
            <p><strong>Description:</strong> {productObj.description}</p>
            
            <hr />
          </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
