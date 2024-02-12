import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data)
      })
      .catch(e => {
        console.log("Cannot display products");
      })
  }, [])

  return (
    <>
      {products.length > 0 ?
        products?.map((product) => {
          return (
            <div key={product.id} className="ProductListPage">


              <img className="product-img" alt="product" src={product.image} />
              <h3>{product.title}</h3>
              <h4>{product.category}</h4>
              <h4>{product.price}</h4>
              <p>{product.description}</p>
              <Link to={`./product/details/${product.id}`}>More Details</Link>

            </div >
          )
        }) : (<div><h3>No products to display</h3></div>)}
    </>
  );
}

export default ProductListPage;
