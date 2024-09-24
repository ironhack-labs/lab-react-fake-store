import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const params = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const data = await response.json()

    setProduct(data)
  }


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      <div className="image-container">
        <img src={product.image} alt="product image" />
      </div>

      <h3><strong>{product.title}</strong></h3>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p className="description">{product.description}</p>

      <Link to="/" className="btn-primary "><button>Back</button></Link>
    </div>
  );
}

export default ProductDetailsPage;
