import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const getClothes = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getClothes();
  }, []);

  console.log(products);
  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
          price={`$${product.price}`} // Format price with a dollar sign
          category={product.category} // Pass the missing category prop
          
        />
      ))}
    </div>
  );
}

export default ProductListPage;
