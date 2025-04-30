import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <h2>{product.title}</h2>
            </Link>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;