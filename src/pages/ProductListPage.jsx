
import { useEffect, useState } from "react"
import axios from 'axios'
import ProductCard from "./../components/ProductCard";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products"


function ProductListPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllAProducts()
  }, [])

  const getAllAProducts = () => {
    axios
      .get(apiURL)
      .then(response => {
        setProducts(response.data)                // axios coloca la respuesta del server en .data
      })
      .catch(err => alert('ERROR RECIBIENDO LOS APARTAMENTOS'))
  }


  return (
    <div className="ProductListPage">
      {
        products.map(eachProduct => {
          return (
            <Link key={eachProduct.id} to={`/product/details/${eachProduct.id}`}>
              <ProductCard {...eachProduct} />
            </Link>
          )
        })
      }
    </div >
  )
}

export default ProductListPage;