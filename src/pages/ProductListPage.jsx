import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import ProductCard from "../components/ProductCard/ProductCard"


function ProductListPage() {
  
  const APIURL = 'https://fakestoreapi.com/products'

  useEffect(() => {
    axios
    .get (APIURL)
    .then (response => {
      setProducts(response.data)
      setIsLoading(false)
    }
    )
  }, [] )

  const [products, setProducts] = useState()
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
