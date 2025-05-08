import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const params = useParams()

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      setProduct(response)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [params.productId])

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
       <img className="product-image" src={product.image} alt="image" />
       <p className="label">{product.category}</p>
       <h2 className="produc-title">{product.title}</h2>
       <p>{product.description}</p>
       <p className="price">${product.price}</p>
       <Link to= "/">
       <button className="backbutton">Back</button>
       </Link>
    </div>
  );
}

export default ProductDetailsPage;
