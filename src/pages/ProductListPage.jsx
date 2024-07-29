import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true)

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {

    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
        setLoading(false)
      })
      .catch(err => console.log(err))

  }, [])

  console.log(products)


  return (

    <div className="ProductListPage">


      {products.map((echProduct) => {

        console.log(echProduct.price)
        return (


          <Link to={`${echProduct.id}`} key={echProduct.id}>
            <ProductCard key={echProduct.id} {...echProduct} />
          </Link>

        )

      }
      )}



    </div>
  );

}

export default ProductListPage;
