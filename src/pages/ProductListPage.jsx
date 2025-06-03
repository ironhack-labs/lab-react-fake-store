import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    async function getProducts() {
      try{
      const productsJson = await fetch("https://fakestoreapi.com/products");
      const productsData = await productsJson.json();
      setProducts(productsData);
      console.log(productsData)
      
    }
    catch{
      (err) =>{
        console.log(err)
      }
    }
      }
    getProducts();
  },[])
  
  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product)=>{
        return (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div key={product.id}>
            <img src={product.image} alt={product.title}/>
            <h4><strong>{product.title}</strong></h4>
            <h5>{product.category}</h5>
            <h4>${product.price}</h4>
            <p>{(product.description.length < 50 ? product.description : `${product.description.slice(0, 50)} ...`)}</p>
          </div></Link>
          )
      })}
    </div>
  );
}

export default ProductListPage;
