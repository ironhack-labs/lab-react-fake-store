import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  
  const {productId} = useParams(); // lee el id desde la URL
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
 useEffect(() => {
  axios
  .get (`https://fakestoreapi.com/products/${productId}`)
  .then((response) => {
    setProduct(response.data);
  })
  .catch((error) => {
    console.error("error no prodcut details", error);
  });
 }, [productId]);


  return (
    <div className="ProductDetailsPage">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={150} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetailsPage;
