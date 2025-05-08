import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{

    fetch(`https://fakestoreapi.com/products`)
    .then((response) =>{
      return response.json()
    })
    .then((response)=>{
      //console.log(response)
      setProducts(response)
      console.log(response)
      
    })
    .catch((error)=>{
      console.log(error)
    })

    if (products === null) {
      return <h3>...searching products</h3>
    }
  }, [])//componentDidMount


  return (
    <div className="ProductListPage">

      {/* Render list of products here */}
      
        {products.map((eachProduct)=>{
          
          
        return(
          <div className="list-container" key={eachProduct.id}>
            <Link to={`/product/details/${eachProduct.id}`}>  
            <img src={eachProduct.image} alt={eachProduct.title} width="100px"/>
            <p>{eachProduct.title}</p>
            <p>{eachProduct.category}</p>
            <p>{eachProduct.price}</p>
            <p>{eachProduct.description}</p>
            </Link>
          
          
          
          
          </div>
          
        )
      })}
    </div>
  );
}

export default ProductListPage;
