import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{

    fetch("https://fakestoreapi.com/products")
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      setProducts(response)
      //console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })

  },[])


  return (
    <div className="ProductListPage">
      {products.map((product,index) => {
        return (
          <Link to={`/product/details/${product.id}`}  key={index}>
          <div className="card text-center">
            <img src={product.image} style={{width:"150px",border:"solid 1px gray"}} alt="img" />
            <p style={{fontWeight:"bold"}}>{product.title} -</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
          </Link>
         
        )
      })}
    </div>
  );
}

export default ProductListPage;
