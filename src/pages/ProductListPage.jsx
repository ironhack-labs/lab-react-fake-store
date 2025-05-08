import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setProducts(jsonResponse)
      })
      .catch(() => console.error("Couldn't retrieve the data"))
  }, [])

  return (
    <div>
      <ul className="ProductListPage">
            {
                products.length === 0 ?
                (<h2>Loading products...</h2>) : 
                (products.map((eachProduct) => {
                  return (
                  <Link to={`/product/details/${eachProduct.id}`} key={eachProduct.id}>
                  <ProductCard eachProduct={eachProduct} />
                  </Link>
                )
                }))
            }
        </ul>
    </div>
  );
}

export default ProductListPage;
