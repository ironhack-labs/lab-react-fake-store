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
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((eachProduct) => {
        return (
          <Link to={`/product/details/${eachProduct.id}`} key={eachProduct.id}>
          <div style={{display:"flex", alignContent:"center", border:"2px solid black", padding:"10px", margin:"10px"
          }}>
            <img src={eachProduct.image} alt="" width={100}/>
            <h2>{eachProduct.title}</h2>
            <h3>{eachProduct.price}</h3>
            <h4>{eachProduct.category}</h4>
            <h5>{eachProduct.description}</h5>
          </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
