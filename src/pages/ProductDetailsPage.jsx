import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  // const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  // useEffect(() => {
  //   axios.get(`https://fakestoreapi.com/products/${productId}`)
  //   .then((response) => setProduct(response.data))
  //   .catch((error) => console.log(error))
  // }, [productId] );


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      {/* <div className="product-card" key={product.id}>
        <img src={product.image} alt={product.title}/>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.category}</p>
        <p className="product-price">{`$${product.price}`}</p>
        <p className="view-details">{product.description}</p>
      </div> */}
    </div>
  );
}

export default ProductDetailsPage;
