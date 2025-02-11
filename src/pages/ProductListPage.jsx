import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).

  const getProducts = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch(getProducts)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products && products.map(product => (
        <Link to={`/product/details/${product.id}`} key={product.id} >
          <div className="product-card">
            <img src={product.image} className="product-img" />
            <p className="product-name">{product.title} </p>
            <p className="product-info">{product.category}</p>
            <p className="product-info">${product.price}</p>
            <p className="product-desc">{product.description}</p>

            <button onClick={(e) => {
              e.preventDefault();
              console.log(`Added: ${product.id} `)
            }} className="buy-button">
              Buy
            </button>

          </div>
        </Link>

      ))}
    </div>
  );
}

export default ProductListPage;
