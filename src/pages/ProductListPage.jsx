import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetailsPage from "./ProductDetailsPage";
import { Link } from "react-router-dom";



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
      return (
        <Link to={`/product/details/${item.id}`} 
        className="product-item card" key={index}>
          <div className="product-item-img">
            <img src={item.image} alt="img" />
          </div>
          <h4 className="title">{ item.title }</h4>
          <span className="category">{ item.category }</span>
          <span className="price">{ item.price }</span>
          <p className="description">{ item.description }</p>
        </Link>
      )
    }))
  }

  return (
    <div className="ProductListPage container">
      { fetchAllProducts() }
    </div>
  );
}

export default ProductListPage;
