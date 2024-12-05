import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <h1 className="text-center my-4">Lista de Productos</h1>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4"> 
              <div className="card h-100"> 
                <Link to={`/product/details/${product.id}`}> 
                  <img src={product.image} alt={product.title} className="card-img-top img-fluid" />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><strong>Precio: ${product.price}</strong></p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
