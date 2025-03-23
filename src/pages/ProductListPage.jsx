import { useEffect, useState } from "react";


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
}, [])

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => {
        return(
          <>
            <Link key ={eachProduct.id} to={`product/details/${eachProduct.id}`}>
            <div className="ProductList-element">
             <div style={{ border: "2px solid black", width: "18%", display: "flex", justifyContent: "center" }}>
              <img src={eachProduct.image} alt="" />
            </div>
              <h2>{eachProduct.title}</h2>
              <p>{eachProduct.category}</p>
              <p>{peachProduct.price}</p>
              <p>{eachProduct.description.length > 250 ? eachProduct.description.slice(0, 250) + "..." : eachProduct.description}</p>
            </div>
            
            </Link>
          
          
          </>
        )
      })}
    </div>
  );
}

export default ProductListPage;
