import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = 'https://fakestoreapi.com'

function ProductListPage() {

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = () => {
    axios
      .get(`${API_URL}/products`)
      .then(response => setProducts(response.data))
      .catch(err => console.log(err))
  }

  const [products, setProducts] = useState([]);

  return (
    <div className="ProductListPage">
      {
        products.map(elm => {
          return (
            <Link to={`/product/details/${elm.id}`}>

              <div className="ProductCard card" key={elm.id} >

                <div className="widthInfo">

                  <img src={elm.image} alt="" />

                </div>

                <div className="widthInfo">

                  <h3>{elm.title}</h3>

                </div>

                <div className="widthInfo">

                  <h3>{elm.category}</h3>

                </div>

                <div className="widthInfo">

                  <h3> € {elm.price}</h3>

                </div>

                <div className="widthInfo">

                  <h3>{elm.description}</h3>

                </div>

              </div>

            </Link>
          )
        })
      }
    </div>
  );
}

export default ProductListPage;
