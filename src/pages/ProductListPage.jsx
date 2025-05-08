import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [productList, setProductList] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setProductList(response)
      })
      .catch((e) => {
        console.log(e);
      });

  }, []);



  return (
    <div className="ProductListPage">
      {productList.map((e) => {
        return (
          <div key={e.id} className="card">
            <img src={e.image} alt="" />
            <Link to={`/product/details/${e.id}`}>
            <p>{e.title}</p>
            </Link>
            <p>{e.price}</p>
            <p>{e.category}</p>
            <p>{e.description}</p>
            
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
