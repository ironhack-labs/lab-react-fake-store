import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  /* console.log("productId", productId); */

  const singleProductURL = `https://fakestoreapi.com/products/${productId}`
  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log("useEffect hook - fetching a single product");
    axios.get(singleProductURL).then((response) => {
      setProduct(response.data);
      console.log(response.data)
    })
      .catch((error) => { //Establece un catch por si ocurre algún error al traer la información
        console.log(error);
      })
  }, [singleProductURL]); //si pongo "productId" en este dependencyArray aparece este aviso (React Hook useEffect has a missing dependency: 'singleProductURL'. 
  // Either include it or remove the dependency array.) Por eso lo he sustituido por la url.


  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <img src={product.image} alt="product image" />
      <button className="btn-primary">{product.category}</button>
      <h2>{product.title}</h2>
      <div className="secondary-div">
        <p className="product-description">{product.description}</p>
        <span>${product.price}</span>
      </div>
      <hr />
      <Link to="/" className="btn-secondary"><button >Back</button></Link>
    </div>
  );
}

export default ProductDetailsPage;
