import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";


function ProductListPage() {

  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])




  return (
    <div className="ProductListPage">
      {isLoading ?
        <h1>CARGANDO...</h1>
        : products.map(elm => {

          return (
            <Link to={`/product/details/${elm.id}`} key={elm.id} ><ProductCard {...elm} /> </Link>
          )

        })}
    </div>
  );
}

export default ProductListPage;
