import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setProducts(res)

      })
      .catch((error) =>{
console.log(error)
      })

  }, []);

  return (
    <div className="ProductListPage">{products.map((eachProducts)=>{
      return(
        <div key={eachProducts.id} className="product-card">
          <Link  to = {`/product/details/${eachProducts.id}`}>
          <img src= {eachProducts.image} alt="" width={75}/>
          <h3>{eachProducts.title}</h3>
          <h3>{eachProducts.category}</h3>
          <h3>{eachProducts.price}</h3>
          <h3>{eachProducts.description}</h3>
          </Link>
          

          </div>
      )
      
     
    })}
    
    </div>
  );
}

export default ProductListPage;
