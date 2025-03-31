import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);


   // frontend route : /product/details/15
  // backend route : /products/15

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data;
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="px-4 py-8 border-b w-full">
    {products &&
      products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <ProductCard {...product} />
          </Link>
        );
      })}
  </div>
);
}

export default ProductListPage;
