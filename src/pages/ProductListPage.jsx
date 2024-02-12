import axios from "axios";
import { useEffect, useState } from "react";
import './../App.css'
import { Link } from "react-router-dom";


function ProductListPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => loadProducts(), [])

  const loadProducts = () => {

    axios
      .get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="ProductListPage">

      {

        products.map(elm => {
          return (

            <article className="productsCard card" key={elm.id}>
              <Link to={`/product/details/${elm.id}`}>
                <div className="content">
                  <img src={elm.image} alt={elm.title} />
                  <h2><strong>{elm.title}</strong></h2>
                  <p>{elm.category}</p>
                  <p>{elm.price}$</p>
                  <p className="productsDesc">{elm.description}</p>
                </div>
              </Link>
            </article>
          )
        })
      }

    </div>
  );
}

export default ProductListPage;
