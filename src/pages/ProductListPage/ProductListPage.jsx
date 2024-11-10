import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com"

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = () => {
    axios
      .get(`${API_URL}/products`)
      .then(response => setProducts(response.data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      {
        products.map(products => {

          return (

            <Link to={`/product/details/${products.id}`} key={products.id}>
              < div className="ProductCard card">
                <img src={products.image} alt={products.title} />
                <h2>{products.title}</h2>
                <h3>{products.category}</h3>
                <h3>${products.price}</h3>
                <p>{products.description}</p>
              </div >
            </Link>

          )

        })

      }
    </div>
  )
}

export default ProductListPage;
