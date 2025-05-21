import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios  from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  
  const params  = useParams();

  const [product, setProduct] = useState({});
  
  useEffect(() => {
    getData();
  }, [params]);

  const getData = async () => {

    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${params.productId}`)
        setProduct(response.data)
        console.log(response.data)
    } catch (error) {
      console.log(error)
    }


  };

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
            <img src={product.image} style={{width: "200px"}} />
            <h3>Title: {product.title}</h3>
            <h3>Category: {product.category}</h3>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
    </div>
  );
}

export default ProductDetailsPage;
