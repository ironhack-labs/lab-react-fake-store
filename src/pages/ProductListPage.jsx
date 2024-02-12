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
      .then((result) => setProducts(result.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="ProductListPage">
      {products.length === 0 ? <p>Nothing to show...</p> : 
        products.map((element) => {
          return(
            <div className="card" key={element.id}>
              <Link to={`/product/details/${element.id}`}>
              <div className="flex-center">
                <div className="element">
                  <div className="element-image">
                    <img src={element.image} alt="ProductImg" />
                  </div>
                </div>
                <h1 className="element">{element.title}</h1>
                <p className="element">{element.category}</p>
                <p className="element">${element.price}</p>
                <p className="element">${element.description}</p>
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
