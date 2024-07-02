import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {

      if (!response.status === 200) {
        throw new Error("Server response not ok");
      }

      const data = response.data;
      console.log(data);

      setProducts(data);

    })
    .catch((error) => {
      console.log("error: ", error);
    });
  }, []);


  return (
    <div className="ProductListPage">
      
      <ul>
        {products.map(product => (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <li className="listItem card flex-center">
                <img src={product.image} className="productImg"/>
                <p className="productTitle">{product.title}</p>
                <p>{product.category}</p>
                <p>€{product.price}</p>
                <p>{product.description}</p>
            </li>
          </Link>
        ))}
      </ul>

    </div>
  );
}

export default ProductListPage;
