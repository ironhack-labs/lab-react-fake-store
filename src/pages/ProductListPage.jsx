import { useEffect, useState } from "react";
import axios from "axios";
import './ProductListPage.css';
import { Link } from "react-router-dom";


function ProductListPage() {
  const [products, setProducts] = useState([]);

  const apiURL = "https://fakestoreapi.com/products";

  const listOfProducts = async () => {
    try {
      const response = await axios.get(apiURL);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listOfProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`} className="product-link">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            </Link >
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;