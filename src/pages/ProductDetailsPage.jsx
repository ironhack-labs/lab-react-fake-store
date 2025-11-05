import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  const { productId } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setProduct(data)
      })

  }, [productId])

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:


  if (!product) {
    return <h3> Searching...</h3>
  }
  return (
    <div >
      <img src={product.image} alt="" />
      <h1>{product.title}</h1>
      <h4 style={{fontWeight: "800"}}>Price:</h4>
      <h3>{product.price}</h3>
      <h4 style={{fontWeight: "800"}}>Description:</h4>
      <h4>{product.description}</h4>
      <h4 style={{fontWeight: "800"}}>Category:</h4>
      <h4>{product.category}</h4>
      <h4 style={{fontWeight: "800"}}>Rating:</h4>
      <h5>{product.rating.rate}
        <br />
        rated by <strong>{product.rating.count} </strong> users</h5>
    </div>
  );
}

export default ProductDetailsPage;