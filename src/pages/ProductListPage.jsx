import axios from "axios";
import { useEffect, useState } from "react";
const API_URL = "https://fakestoreapi.com"
import { Link } from "react-router-dom";

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
      <h1>product page</h1>

      {
        products.map(elm => {
          return (
            <Link to={`/product/details/${elm.id}`}>  <div className="productCard card" key={elm.id}>
              <ul>

                <img src={elm.image} alt={elm.tittle} />
                <h2><strong>Articulo</strong></h2>
                <li> <h3>{elm.title}</h3></li>
                <h2><strong> precio</strong></h2>
                <li> <span>{elm.price}</span></li>
                <li> <p>{elm.description}</p></li>
                <hr />
                <br />
              </ul>

            </div>
            </Link>
          )
        })
      }
    </div>
  );

}

export default ProductListPage;
