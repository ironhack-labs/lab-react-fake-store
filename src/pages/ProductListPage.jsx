import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setIsLoading(false); 
    } catch (error) {
      console.log(error);
      setIsLoading(false); 
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {isLoading ? (
        <p>Loading the long list of stuff...</p>
      ) : (
        products.map((product) => (
          <Link key={product.id} className="productLine" to={`/product/details/${product.id}`}>
            <img
              className="productListImage"
              src={product.image}
              alt={`Image ${product.title}`}
            />
            <p className="productInfo">{product.title}</p>
            <p className="productInfo">{product.category}</p>
            <p className="productInfo">{product.price}</p>
            <p className="productInfo">{product.description}</p>
          </Link>
        ))
      )}
    </div>
  );
}

export default ProductListPage;
