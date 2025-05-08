import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).te actualizado desde cualquier lugar con la aplicación móvil de Slack
  
  
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      console.log(response);
      setProducts(response)
      

    })

  },[])

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct)=>{
        return (
          <div id="manolo" key={eachProduct.id}> 
          <Link to={`/product/details/${eachProduct.id}`}>
          <img src={eachProduct.image} width={"100"} />
        <p>{eachProduct.title}</p>
        <p>{eachProduct.category}</p>
       <p>{eachProduct.description}</p>
        <p>{eachProduct.price}</p>
        <p>{eachProduct.rating.count}</p>
        <p>{eachProduct.rating.rate}</p>
       </Link>
        
     
</div>
        )
      })}
    </div>
  );
}

export default ProductListPage;
