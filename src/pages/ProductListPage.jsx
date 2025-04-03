import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
    console.log(products);
  }, []);

  return (
    <div className="ProductListPage">
      <div>
        {products.map((product) => (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} style={{ width: '100px' }} />
              <h2>{product.title}</h2>
              <p>{product.category}</p>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
