import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Using Axios to fetch data from the API
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
