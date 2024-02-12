import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";



const ProductListPage = () => {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => loadWeather(), [])
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const loadWeather = () => {

    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {

        isLoading
          ?
          <h1>Estoy en proceso... no me apures</h1>
          :
          products.map(product => {



            return (
              <Link to={`/product/details/${product.id}`} key={product.id} >
                <article className="card" >
                  <img src={product.image} alt={product.name} />
                  <h3>{product.title}</h3>
                  <p>{product.category}</p>
                  <p>${product.price}</p>
                  <p>{product.description}</p>

                </article>
              </Link>
            )
          })
      }
    </div >
  );
}

export default ProductListPage;
