import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response)=>{
      return response.json()
    }
    )
    .then((response)=>{
      setProducts(response)
    }
    )
    .catch((error)=> console.log(error))


  },[])


  return (
    <div className="ProductListPage">
      {products.map((eachProduct)=>{
        return (
              <Link to={`/product/details/${eachProduct.id}`}>
              <div className="card">
                  <div style={{width:'120px'}}><img src={eachProduct.image} alt="" srcset="" /></div>
                  <div><p style={{fontWeight:'700'}}>{eachProduct.title}</p></div>
                  <div><p>{eachProduct.price}</p></div>
                  <div><p>{eachProduct.category}</p></div>
                  <div style={{width:'500px'}}><p>{eachProduct.description}</p></div>
                </div>
                </Link>
        ) 
      })}
    </div>
  );
}

export default ProductListPage;
