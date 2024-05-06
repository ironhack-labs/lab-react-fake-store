import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
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
      .catch(err => console.log('Error recibiendo los productos'))
  }

  return (
    <div key={products.id} className="ProductListPage">
      {isLoading ? <h1>Loading</h1> : products.map(eachProduct => {
        return (<Link to={`/product/details/${eachProduct.id}`} key={eachProduct.id} ><ProductCard  {...eachProduct} /></Link>)
      })
      }


    </div>
  );
}

export default ProductListPage;



