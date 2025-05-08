import { useEffect, useState } from "react";
import axios from "axios";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {


    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        // Handle success
        setProducts(response.data)
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.log('Error fetching products:', error);
      })
  }, [])

  return (
    <div className="ProductListPage" >
      {products.map(elm => {
        return (
          <Link to={`${elm.id}`} key={elm.id}>
            <ProductCard {...elm} />
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
