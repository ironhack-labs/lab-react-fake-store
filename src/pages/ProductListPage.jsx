import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    listProducts();
  }, []);

  const listProducts = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {setProducts(response.data); console.log(response.data)})
      .catch((error) => console.error(error))
  }

  return (
    <div className="ProductListPage container">
      {products && products.map((product) => (
        <div className="flex-center card" key={product.id}>
          <Link to={"/product/details/" + product.id}>
            <img className="" src={product.image}></img>
            <span>{product.title}</span>
            <span>{product.category}</span>
            <span>{product.price}</span>
            <span>{product.description}</span>
          </Link>
        
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
