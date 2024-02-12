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

  console.log(products)

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}

      {products === null
        ? <div>Loading...</div>
        : products.map((elm) => {
          return (
            <Link to={`/product/details/${elm.id}`}>
              <div key={elm.id} className="listPage">
                <img src={elm.image} alt={elm.title} className="productImg" />
                <div className="title">{elm.title}</div>
                <div className="category">{elm.category}</div>
                <div className="price">${elm.price}</div>
                <div className="description">{elm.description.slice(0, 50)}</div>
              </div>
            </Link>
          )
        })

      }
    </div>
  );
}

export default ProductListPage;
