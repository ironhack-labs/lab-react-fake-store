import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import ProductCard from "../components/ProductCard/ProductCard"

const APIURL = 'https://fakestoreapi.com'

function ProductListPage() {
  

  const [products, setProducts] = useState()


  useEffect(() => {
    axios
    .get (`${APIURL}/products`)
    .then (response => {
      setProducts(response.data)
      setIsLoading(false)
    }
    )
  }, [] )

  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="ProductListPage">
      {
        isLoading? <h5>Cargando</h5> : products.map(elm => {
          return (
            <ProductCard key={elm.id} {...elm} />
          )
        })
      }
    </div>
  );
}

export default ProductListPage;
