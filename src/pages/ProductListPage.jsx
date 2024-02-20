import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
      setProducts(response)
    })
    .catch((error) => {
      console.log(error)
    })
    
  }, [])

  if (products === null) {
    return <h3>...Buscando productos</h3>
  }

  console.log(products)


  return (
    <div className="ProductListPage">

      {products.map((eachProduct) => {
        return (

        <Link key={eachProduct.id} to={`/product/details/${eachProduct.id}`}>
          <div >
  
        <img src={eachProduct.image} alt="producto" width={"200px"}/>
        <div>
        <h3>{eachProduct.tittle}</h3>
        <h3>{eachProduct.category}</h3>
        <h3>{eachProduct.price}</h3>
        <h3>{eachProduct.description}</h3>
        </div>
        </div>
         </Link>
        )


        })}


    </div>
   
  );
}

export default ProductListPage;
