import axios from "axios";
import { useEffect, useState } from "react";
import './ProductListPage.css'
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="ProductListPage container">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => {
          return (
            <div key={product.id} className="card">
              <div className="card-img-container">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="card-content">
                <p className="category">{product.category}</p>
                <h3 className="product-title">{product.title}</h3>
                <p className="description">{product.description.substring(0, 100)}...</p>
                <div className="card-footer">
                  <span className="price">${product.price}</span>
                  <Link to={`/product/details/${product.id}`}><button className="view-btn">View Details</button></Link>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListPage;