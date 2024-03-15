import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiURL = "https://fakestoreapi.com/products";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [fetching, setFetching] = useState(true);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const {productId} = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`${apiURL}/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setFetching(false)

      })
      .catch((err) => {
        console.log(err);
        setFetching(false);
      })
  }, [productId] );

  if (!product) return <div>Loading...</div>


  return (
    <div className="ProductDetailsPage">

      {/* Render product details here */}
      <img src={product.image} alt= "product image" style={{height:"200px"}} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>{product.category}</h3>
      <h3>${product.price}</h3>

    </div>
  );
}

export default ProductDetailsPage;
