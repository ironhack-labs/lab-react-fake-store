import { useState, useEffect  } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
       .then((response) => {
          setProducts(response.data);
       })
       .catch((error) => {
         console.log(error);
       });
    }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <div className="container">
        <h1>Products List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img 
                src={product.image} 
                alt={product.title}
                className="h-48 w-full object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <Link 
                to={`/product/details/${product.id}`}
                className="btn-primary inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
