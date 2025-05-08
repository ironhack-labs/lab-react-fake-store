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
      .catch((e) => {
        console.log(e)
      })
  }, []);

  return (
    <div className="ProductListPage">{products.map((eachProduct)=> {
      
      return(
        <Link to={`/product/details/${eachProduct.id}`} key={eachProduct.id}>
        <div style={{border: '1px solid black', margin: '5px', display: 'flex'}}>
        <img  src={eachProduct.image} alt= "image" width={100}/>
        <h3>{eachProduct.title}</h3>
        <p>{eachProduct.category}</p>
        <h3>{eachProduct.price}</h3>
        <p>{eachProduct.description}</p>
        </div>
        </Link>
      )
      
    })}
    </div>

  );
}

export default ProductListPage;
