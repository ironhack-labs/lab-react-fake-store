import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetailsPage from "./ProductDetailsPage";
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
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(response.data);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  /*    axios.get(`https://fakestoreapi.com/products`)
    .then((response) => {
      console.log(response.data)
      //setProducts(response.data)
  
    })
    .catch((error) => {
      console.log(error)
    }) */

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => {
        return (
          <div key={eachProduct.id} className="products-container">
            <Link to={`product/details/${eachProduct.id}`}>
            <img src={eachProduct.image} style={{width: "200px"}} />
            </Link>
            <h3>Title: {eachProduct.title}</h3>
            <h3>Category: {eachProduct.category}</h3>
            <h3>Price: {eachProduct.price}</h3>
            <h3>Description: {eachProduct.description}</h3>

            <ProductDetailsPage key={eachProduct.id}/>
          </div>

        );
      })}
    </div>
  );
}

export default ProductListPage;
