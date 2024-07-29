import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../pages/ProductCard";
import { Link } from "react-router-dom";




const ProductListPage = () => {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {

    axios
      .get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)

      })
      .catch(err => console.log(err))



  }, []);



  return (
    <div className="ProductListPage">
      <h1>Productos</h1>

      {
        isLoading ? <h1>productos ecommerce</h1>
          : products.map(elm => {
            return (
              <Link key={elm.id} to={`/product/details/:${products.id}`}>
                <ProductCard {...elm} />
              </Link>
            )
          })
      }
    </div>
  );
}

export default ProductListPage;


