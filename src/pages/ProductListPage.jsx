import axios from "axios";
import { useEffect, useState } from "react";
import ProductListItem from "../components/ProductListItem";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map(product => <Link to={`/product/details/${product.id}`} key={product.id}><ProductListItem product={product} /></Link>)}
    </div>
  );
}

export default ProductListPage;
