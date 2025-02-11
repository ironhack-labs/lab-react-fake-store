import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import './ProductListPage.css';


function ProductListPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((productDetails, index) => (
        <div key={index} className="product-card">
          <Link to={`/product/details/${productDetails.id}`}>
            <img 
              src={productDetails.image} 
              alt={productDetails.title} 
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">{productDetails.title}</h3>
              <p className="product-category">{productDetails.category}</p>
              <p className="product-price">${productDetails.price}</p>
              <p className="product-description">{productDetails.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
