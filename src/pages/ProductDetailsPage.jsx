import { useEffect, useState } from "react";


function ProductDetailsPage({ prod }) {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect( () => (
    setProduct(prod)
  ), [])

  //Summarize description
  const summaryDescription = product.description ? product.description.slice(0, 50) + "...": "";

  return (
    <div className="container">
    <div className="d-flex gap-4 border align-items-center p-3">
      <div className="col">
        <img className="border" style={{width:"150px", height: "150px", objectFit:"cover"}} src={product.image} alt={product.title} width="100" />
      </div>
      <div className="col">
        <h2 className="fw-bolder">{product.title}</h2>
      </div>
      <div className="col">
        <p> {product.category}</p>
      </div>
      <div className="col">
        <p>{product.price} USD</p>
      </div>
      <div className="col">
        <p>{summaryDescription}</p>
      </div>
    </div>
      
    </div>
  );
}

export default ProductDetailsPage;
