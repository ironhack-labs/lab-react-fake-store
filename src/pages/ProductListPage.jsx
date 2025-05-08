import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";




function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const {productId} = useParams();
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(() =>{
  axios.get('https://fakestoreapi.com/products')
  .then((response) => {
    setProducts(response.data);
  })
  .catch((e) => {
    console.log("error...");
    console.log(e);
  });
}, [productId]);

if (!products){
  return <div>Loading page...</div>
}

  return (
    <div className="ProductListPage">
      <ul>
      {products.map(product => (
        <div key={product.id}>
          <Link to={`/product/details/${product.id}`}>
            <img src={product.image} alt={product.title} />
            {product.title}
            {product.price}
          {product.description}
          {product.category}
          {product.rating.rate} {product.rating.count}
          </Link>
          

          
        </div>
      ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
