import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)
        setLoading(false)
      })
    .catch ((error) => {
    setError(error)
    setLoading(false)
    })
  }, [])
  
  if (loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return (
    
    <div className="ProductListPage">
      {/* Render list of products here */}
      <div className="spacing-md">
          {products.map((product) => (
            <Link to={`/product/details/${product.id}`} key={product.id}>
            <div className="card flex-center spacimg-sm"  style={{justifyContent: "flex-start", width: "100%"}}>
              <img src={product.image} alt={product.title} style={{width: 80, marginRight: 40}} />
              <h2 className="text-uppercase" style={{flex: 1, textAlign: "center"}}>{product.title}</h2>
              <h3 style={{flex: 1, textAlign: "center"}}>{product.category}</h3>
              <h3 style={{flex: 1, textAlign: "center"}}>$ {product.price}</h3>
              <h3 style={{flex: 2, textAlign: "center"}}>{product.description}</h3> 
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ProductListPage;
