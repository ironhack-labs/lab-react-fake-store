import { useState, useEffect } from "react"; // two hooks
import { Link } from "react-router-dom";

function ProductListPage() { // defines ProductListPage() as a function
 
  const [products, setProducts] = useState([]); // set up the useState - the initial value is an empty array
  
  
  useEffect(() => { // useEffect sets up the HTTP request
    
    const fetchProducts = async () => { // create an async function called fetch products for the Http
      try {
        
        const response = await fetch('https://fakestoreapi.com/products'); // THE HTTP REQUEST
        // AWAIT to wait until the request is complete
        // the if statement is to check if the response is successful
        if (!response.ok) { // here the result is stored
          throw new Error('Try Again/ Refresh the page'); // if not 
        }
        
        const data = await response.json(); // Analises the json. JS Object Notation.
        
        setProducts(data); // this updates the products
      } catch (error) { // if any error occurs this is triggered
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProducts();
  }, []); 
  
  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/product/details/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListPage;