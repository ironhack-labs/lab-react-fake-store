import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const params = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    getData()
  },[params.productId]);


  const getData = async () => {
    setProduct(null)

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)

      console.log(response)

      const data = await response.json()

      console.log(data)

      setProduct(data)

    } catch (error) {
      console.log(error)
    }
  }

  if(product === null) {
    return <div>Esperando...</div>
  }

  return (
    <div className="ProductDetailsPage">
      <h5 style={{ fontWeight: "bold" }}>{product.title}</h5>
      <img src={product.image} alt="logo" style={{ width: "50px" }} />
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
