import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  
  // To fetch the product details, set up an effect with the `useEffect` hook:
   useEffect(() =>{
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      })
   })


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
                  <div>
                      <img src={product.image} className="product-image"/>
                      <h3>{product.title}</h3>
                      <p className="price">${product.price}</p>
                      <p>{product.description}</p>
                      <Link to="/" className="button">
                        <button>BACK</button>
                      </Link>
                </div>
          
    </div>
  );
}

export default ProductDetailsPage;
