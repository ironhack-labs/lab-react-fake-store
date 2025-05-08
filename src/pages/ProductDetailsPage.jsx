import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  //const {productId} = useParams();
  const {productId} = useParams();
  
  const [product, setProduct] = useState(null);

  //const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data);
    }).catch((e) => {
      console.log(e);
    })
  }, [productId]);

  const renderDetails = () => {
    return (
      <div> 
        <img src={product.image} alt={product.title} />
        <h3> {product.title} </h3>
        <h3> {product.category} </h3>
        <h3> {product.price} </h3>
        <h3> {product.description} </h3>
        </div>
    )
  }
 
  return (
    <div className="ProductDetailsPage">

    {product === null 
    ? <h2>Loading...</h2>
    : renderDetails()
  }
    </div>
  );
}


export default ProductDetailsPage;
