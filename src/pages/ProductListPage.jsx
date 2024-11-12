import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const apiUrl = "https://fakestoreapi.com/products";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [displayError, setDisplayError] = useState(false);

  async function getProducts() {
    try {
      setDisplayError(false); 
      const response = await fetch(apiUrl);

      if (!response.ok) {
        console.log(`Failed to fetch products. Status code: ${response.status}`);
        setDisplayError(true);
        return;
      }

      const jsonResponse = await response.json();
      setProducts(jsonResponse);
    } catch (error) {
      console.log("There was an error:", error.message);
      setDisplayError(true); 
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {displayError ? (
        <p>There was an error loading the products. Please try again later.</p>
      ) : products.length > 0 ? (
        products.map((product) => (
          <Link to={`/product/details/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.title} width="100" />
            </div>
          </Link>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default ProductListPage;
