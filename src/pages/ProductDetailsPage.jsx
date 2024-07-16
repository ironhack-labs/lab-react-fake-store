import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const params = useParams()
  // console.log(params)

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <img src={product.image} alt="img" width={100} />
    <h2>{product.title}</h2>
    <h3>{product.description}</h3>
    <h3>{product.price}</h3>
    <button className="back-btn">Back</button>
    </div>
  );
}

export default ProductDetailsPage;
