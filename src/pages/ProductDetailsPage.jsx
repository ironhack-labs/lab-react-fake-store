import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

let params = useParams();

useEffect(() => {
  axios.get(`https://fakestoreapi.com/products/${params.productId}`)
  .then((response) => {
    console.log(response.data);
    setProduct(response.data);
  })
    .catch((error) => {console.log("error fetching data", error)});
  }, [params.productId]);



  return (
    <div className="ProductDetailsPage">
    <div key={product.id} className="card">
      <div className="content"><img src={product.image} alt={product.id} /></div>
      <div className="content"><p><b>{product.title}</b></p></div>
      <div className="content"><p>{product.category}</p></div>
      <div className="content"><p>${product.price}</p></div>
      <div className="content"><p>{product.description}</p></div>
    </div>
    </div>
  );
}

export default ProductDetailsPage;
