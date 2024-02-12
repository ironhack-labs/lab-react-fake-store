import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}

      {products !== null &&
        products.map((elm) => {
          return (
            <div className="ProductListPage" key={elm.id}>
            <Link to={`/product/details/${elm.id}`}>
              <div className="listPage">
                <img src={elm.image} alt={elm.title} className="productImg" />
                <div className="title">{elm.title}</div>
                <div>{elm.category}</div>
                <div>${elm.price}</div>
                <div>{elm.description.slice(0, 50)}</div>
              </div>
            </Link>
            </div>
          )
        })

      }
    </div>
  );
}

export default ProductListPage;
