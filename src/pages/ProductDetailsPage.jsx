import { useEffect,  useState,} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [products, setProducts] = useState(null);

 
  const {productId} = useParams()

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(response=>{
      console.log("sucess!")
      setProducts(response.data)
    })
    .catch(e=>console.log("error",e))
  },[]);


  return (
    <>
    { products === null && <h2>Loading...</h2> }
    
    {products &&
    <div className="back" key="key">
      <h1>Title: {products.title} </h1>
        <p>Price: {products.price} </p>
        <p>Description {products.description} </p>
        <p>Category: {products.category} </p>
        <img src={products.image} />
        <p>Rate:{products.rating.rate} </p>
        <p>Count: {products.rating.count} </p>
        <Link to="/"> Back to Display</Link>
    </div>

    }
    </>
  );
}

export default ProductDetailsPage;
