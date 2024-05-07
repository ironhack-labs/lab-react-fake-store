import { useEffect, useState } from "react";
import ProductDetailsPage from "./ProductDetailsPage";
import "../assets/style/ProductListPage.css"
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => { console.log("error") })
  }, [])


  return (

    <div className="ProductListPage">
        
       { products.map((product) => {
          
        return <Link to={`/product/details/${product.id}`}> <div className="EachItem"  key={product.id}>
          
<img src={product.image} alt={product.name} />
          <h2>{product.title}</h2> 
<p>{product.price}</p>
<p>{product.descrption} </p>
<p>{product.category}</p>
<p>{product.rating.rate}</p>
<p>{product.rating.count}</p>
          </div>
          </Link>
        })
      }


    </div>
  );
}

export default ProductListPage;
