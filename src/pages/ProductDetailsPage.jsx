import { useEffect , useState } from "react";
// import ProductListPage from "./ProductListPage";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  
  useEffect(() => {

    axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  } , [productId])


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {product && (
      <article key={product.id}>
        <span><img className="productImg" src={product.image} /></span>
        <span className="productCategory">{product.category}</span>
        <span className="productTitle">{product.title}</span>
        <span className="productPrice">{product.price}$</span>
        <span className="productDec">{product.description}</span>
        <button className="backbutton" onClick={() => window.history.back()}>Back</button>
      </article>
    )}
    </div>
  );
}

export default ProductDetailsPage;
