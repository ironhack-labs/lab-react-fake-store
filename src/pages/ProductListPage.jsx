import { useEffect, useState } from "react";
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
    .then ((response) =>{
      console.log(response)
      setProducts(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  if (products === null) {
    return <h2>...buscando productos</h2>
  }

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => {
        return (
          
          <Link to={`/product/details/${eachProduct.id}`} key={eachProduct.title}>
            <div className="listCard">
            <img src={eachProduct.image} width="60px" alt="img-product" />
            <p>{eachProduct.title}</p>
            <p>{eachProduct.category}</p>
            <p>${eachProduct.price}</p>
            <p>{eachProduct.description}</p>
            </div>
            </Link>
            
        )
      })}
    
      
    </div>
  );
}

export default ProductListPage;
