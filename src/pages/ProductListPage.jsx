import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        const responseData = await response.json();
        setProducts(responseData);
      } else {
        throw new Error("Error while fetching products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((currentProduct) => {
        return (
          <Link
            to={`/product/details/${currentProduct.id}`}
            key={currentProduct.id}
          >
            <ProductCard productDetail={currentProduct} />
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
