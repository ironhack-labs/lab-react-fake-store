import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";


const apiURL = "https://fakestoreapi.com/products"



function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllProducts()
  }, [])


  const getAllProducts = () => {

    axios
      .get(apiURL)
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
      })
      .catch(err => alert('ERROR RECEIVING PRODUCTS'))
  }

  return (
    <div className="ProductListPage">

      {isLoading ? <h1>LOADING PRODUCTS...</h1> :

        products.map(eachProduct => {

          return (
            <Link key={eachProduct.id} to={`/product/details/${eachProduct.id}`}>
              <ProductCard {...eachProduct} />
            </Link>
          )
        })
      }
    </div>
  );
}

export default ProductListPage;
