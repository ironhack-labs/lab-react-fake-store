import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css"
import { Link } from "react-router-dom";


function ProductListPage() {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => loadProducts(), [])

  const loadProducts = () => {

    axios
      .get('http://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="ProductListPage">
      {
        isLoading
          ?
          <h1>Loading...</h1>
          :
          products.map(elm => {

            return (
              <Link to={`/product/details/${elm.id}`}>
                <article className="ApartmentCard" key={elm.id}>
                  <img src={elm.image} alt="Product image" />
                  <h3><strong>{elm.title}</strong></h3>
                  <p>{elm.category}</p>
                  <p>{elm.price}€</p>
                  <p className="description">{elm.description}</p>
                </article>
              </Link>
            )
          })
      }
    </div >
  );
}

export default ProductListPage;
