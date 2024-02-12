import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link component

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(e => console.log(e, 'ERROR Fetching products...'));
  }, []);

  return (
    <div className="ProductListPage">
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>
            <img src={product.image} alt={product.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
