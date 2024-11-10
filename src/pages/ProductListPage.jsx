import "./ProductListPage.css"

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const API_URL = "https://fakestoreapi.com"

function ProductListPage() {

  const [products, setProducts] = useState([]);

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
    <div className="ProductListPage">

      {products.map(elm => {
        return (
          <div className="ProductsList" key={elm.id}>
            <Link to={`/product/details/${elm.id}`}>
              <img src={elm.img} alt="Product image" />
              <h2><strong>{elm.title}</strong></h2>
              <h3>{elm.category}</h3>
              <h3>{elm.price}</h3>
              <p>{elm.description} </p>
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default ProductListPage;
