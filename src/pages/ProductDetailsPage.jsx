import { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const {productId} = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => { 
        return response.json();
      }).then((data) => {
        //console.log("Parsed response: ", data);
        setProduct(data);
      }).catch((err) => console.log("Something went wrong!", err));
}, [product])

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    {productId===undefined && <div>Something went wrong</div>}
    {productId>0 && (
      <div className="product-view"> 
        <div className="product-view-image"><img src={product.image} alt={product.title} /></div>
        <div className="tag">{product.category}</div>
        <div className="title-left"><h1>{product.title}</h1></div>
        <div className="product-view-details">
          <div className="product-view-description">{product.description}</div> 
          <div className="product-view-price bold-font"> ${product.price?product.price.toFixed(2):0} </div>
        </div>
      </div>
    )}
    <hr />
    <div className="btn-primary"><Link to="/" style={{color: "white"}}>Back</Link></div>
    </div>
  );
}

export default ProductDetailsPage;
