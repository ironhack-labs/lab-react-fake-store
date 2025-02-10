import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product">
              <h2>
                {/* Link to ProductDetailsPage with product id */}
                <Link to={`/product/details/${product.id}`}>
                  {product.title}
                </Link>
              </h2>
              <p>{product.description}</p>
              <img src={product.image} alt={product.title} width={100} />
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default ProductListPage;


