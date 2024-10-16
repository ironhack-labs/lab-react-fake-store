import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);

  const getData = async(urlName) =>{
    try{
      const response = await fetch(urlName);
      const data = await response.json();
      setProducts(data);
    }
    catch(error){
      console.log(error)
    }
  }

 
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    getData(url);
   }, [])
  
   console.log(products)
  return (
    <div className="ProductListPage">

      {products.map((product)=>{

       return <Link key={product.id} to={`/product/details/${product.id}`}>
        <>
        <div className="product-list-container">
          <img className="list-container-image" src={product.image} />
          <p className="list-container-title">{product.title}</p>
          <p className="list-container-category">{product.category}</p>
          <p>${product.price}</p>
          <p className="list-container-description">{product.description}</p>
        </div>
        </>
       </Link>
      })}
    </div>
  );
}

export default ProductListPage;
