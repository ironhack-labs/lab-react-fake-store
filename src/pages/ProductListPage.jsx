import { useEffect, useState } from "react";
import axios from "axios"; 
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect( () => {
  axios.get("https://fakestoreapi.com/products") 
    .then ( response => {
      setProducts(response.data) 
    })
    .catch ( (error) => console.log(error))
    }, [])

  return (
    <div className="ProductListPage">
      {products.map ( (element,index) => {
        return (

        // eslint-disable-next-line react/jsx-key
        <Link to={`/product/details/${element.id}` } >
          <div className="item-product" key={index}>
            <img src={element.image} alt="image"/>
            <div>{element.title}</div>
            <div>{element.category}</div>
            <div>${element.price}</div>
            <div>{element.description}</div>
          </div>
        </Link>
      
        )
      })}
    </div>
  );
}

export default ProductListPage;
