import { useEffect, useState } from "react";
import ItemCard from "../components/itemCard";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map(
        (item) => (
          <ItemCard
            key={item.id}
            title={item.title}
            imgSrc={item.image}
            price={item.price}
            category={item.category}
            id={item.id}
          />
        )
        // (item) => title = "title",
        // price ={item.price},
        // (item.description = "description"),
        // (item.category = "category"),
        // (item.image = "image"),
        // (item.rating = "rating"),
        // (item.key = "id")
      )}
    </div>
  );
}

export default ProductListPage;
