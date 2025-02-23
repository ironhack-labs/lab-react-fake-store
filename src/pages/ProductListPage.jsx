import { useEffect, useState } from "react";
import axios from "axios";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    }
    getAllProducts();
  }, []);

  const fetchAllProducts = () => {
    return (products.map((item, index) => {
      return <div key={index}>{ item.title }</div>
    }))
  }

  return (
    <div className="ProductListPage">
      { fetchAllProducts() }
    </div>
  );
}

export default ProductListPage;
