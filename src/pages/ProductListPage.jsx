import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductListPage">
      {products.map((elm) => {
        return (
          <div className="card" key={elm.id}>
            <Link to={`/product/details/${elm.id}`} products={products}>
              {elm.image && <img src={elm.image} alt="product image" />}
              <p className="product-title">{elm.title}</p>
              <p>{elm.category}</p>
              <p>${elm.price}</p>
              <p className="product-description">{elm.description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
