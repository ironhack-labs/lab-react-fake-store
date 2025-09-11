import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {id} = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

useEffect(() => {
  console.log("ID from URL:", id);
  axios.get(`https://fakestoreapi.com/products/${id}`).then((response)=>{
    setProduct(response.data);
  }).catch((error)=> {
    console.log(error)
  });
}, [id]);

  return (
    <div className="ProductDetailsPage" >
          <div className="card grid grid-cols-5 items-center justify-between w-screen border-2 border-gray-300 mx-2 my-2" >
            <img src={product.image} alt="product Image" width="150px" className="border border-gray-400 p-2" />
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
          </div>
          <Link to="/" className="block mb-4">
        ← Back
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
