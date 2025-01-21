import { useEffect, useState } from "react";
import './ProductListPage.css'
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

useEffect(()=> {
  fetch('https://fakestoreapi.com/products')
  .then(Response => Response.json())
  .then(data => setProducts(data))
  .catch(err => console.log(err))
}, [])

if(products.length === 0){
  return <p>Loading...</p>
}   

return (
  <div className="ProductListPage">
    {products.map(product => (
      <div key={product.id} className="ProductCard">
        {/* Link to the ProductDetailsPage with the productId */}
        <Link to={`/product/details/${product.id}`} className="ProductLink">
          <img src={product.image} alt={product.title} width={'100px'} height={'100px'} />
          <div className="ProductDetails">
            <h1>{product.title}</h1>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      </div>
    ))}
  </div>
);
}

export default ProductListPage;
