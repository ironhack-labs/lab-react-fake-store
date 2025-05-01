import { useEffect } from "react";
import { useState } from "react";
import { json, Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(()=>{
  fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then((json)=>{
        setProducts(json);
})
  .catch((error)=>{
    console.log("error")
  })
},[])

  return (
    <div className="ProductListPage">
  <div className="product-list">
    {products.map((product) => (
      <Link
      to={`/product/details/${product.id}`} 
      key={product.id} 
      className="product-card"
      onClick={()=>{}}
      >
        <img src={product.image} alt={product.title} />
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-title">{product.title}</p>
      </Link>
    ))}
  </div>
</div>
  );
}

export default ProductListPage;
