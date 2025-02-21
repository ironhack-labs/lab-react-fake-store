import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URLProduct = "https://fakestoreapi.com/products";
function ProductListPage() {
  const [ fetching, setFetching ] = useState(true);
  const [products, setProducts] = useState([]);

function fetchProducts() {
   axios
     .get(URLProduct)
     .then((response) => {
       console.log(response);
       setProducts(response.data);
     })
     .catch((error) => {
       console.log(error);
       setFetching(false);
     });
  
}
    useEffect(() => {
    fetchProducts();
  }, []);

 
  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
   
     <div className="ProductListPage">
    
     {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-details">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
            <p className="text-gray-600">Description: {product.description}</p>

            <Link to={`/product/details/${product.id}`}>
              <button className="btn-primary">View Details</button>
            </Link>
    
          </div>
        </div>
      ))}
    </div>
  );
   
}

export default ProductListPage;
