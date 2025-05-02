import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      setProducts(data)
    })
    .catch((error) => {
      console.log(error)
    })


  },[])

  

  return (
    <div className="ProductListPage">
      {/* Render list of products here */
        products.map((cadaProducto) => {
          return ( 
          <>
            <Link key={cadaProducto.id} to={`/product/details/${cadaProducto.id}`}>
            <div className="ProductList-element">
              <div style={{border: "2px solid black", width: "15%", display: "flex", justifyContent:"center"}}>
                 <img src={cadaProducto.image} alt="foto-producto"/>
              </div>
              <p>{cadaProducto.title}</p>
              <p>{cadaProducto.category}</p>
              <p>{cadaProducto.price}</p>
              <p>{cadaProducto.description.length > 250 ? cadaProducto.description.slice(0, 250) + "..." : cadaProducto.description}</p>
            </div>
            </Link>
          </>
          )

        })
      
      }
    </div>
  );
}

export default ProductListPage;
