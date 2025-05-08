
import axios from "axios";
import { useState, useEffect } from "react"
import './ProductListPage.css'
import { Link } from "react-router-dom";


function ProductListPage() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => loadProducts(), [])

  const loadProducts = () => {

    axios
      .get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data)               // en axios la respuesta del server está en .data
        setIsLoading(false)
      })
      .catch(err => console.log(err))

  }

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <hr />
      {
        isLoading
          ?
          <h1>Cargando...</h1>
          : products.map(pdt => {

            return (
              <article className="card" key={pdt.id}>
                <Link to={`/product/details/${pdt.id}`} >
                  <img src={pdt.image} alt="apartment" />
                </Link>
                <div className="div-container">
                  <h3>{pdt.title}</h3>
                  <p>{pdt.category}</p>
                  <p>Price: {pdt.price}</p>
                  <p>{pdt.description}  </p>

                </div>

              </article>
            )
          })
      }



    </div>
  );
}

export default ProductListPage;


// The state variable `products` is currently an empty array [],
// but you should use it to store the response from the Fake Store API (the list of products).
// const [products, setProducts] = useState([]);

// To fetch the list of products, set up an effect with the `useEffect` hook: