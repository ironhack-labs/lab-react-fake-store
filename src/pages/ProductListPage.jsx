import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="ProductListPage">
      <h1>All Products</h1>
      <table className="products-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.title} className="product-image" /></td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <Link to={`/product/details/${product.id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductListPage;
