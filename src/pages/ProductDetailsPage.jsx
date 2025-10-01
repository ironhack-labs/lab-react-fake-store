import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const url = "https://fakestoreapi.com/products/";

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(url + productId)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
        console.log("producto cargado");
      })
      .catch((e) => {
        console.log(e);
        console.log("error al buscar el producto");
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <img className="imagenproduct" src={product.image}></img>
      <span className="category">{product.category}</span>
      <h1 className="textos">{product.title}</h1>
      <div className="descprice">
        <p className="textos">{product.description}</p>
        <p>${product.price}</p>
      </div>
      <div>
        <Link to="/">
        <button className="btn-secondary">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
