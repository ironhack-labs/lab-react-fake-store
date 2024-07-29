import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams()

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))

  }, [])

  const { title, image, category, price, description } = product

  return (
    <div className="ProductDetailsPage">
      {
        isLoading
          ?
          <h2>Loading product...</h2>
          :
          <section className="container">
            <div className="rounded shadow bg-white p-4 text-left">
              <div className="w-full max-w-xs mb-4">
                <img src={image} alt={title} />
              </div>
              <p className="mb-4"><small className="rounded bg-blue-600 p-2 text-white ">{category}</small></p>
              <h3 className="text-xl mb-4"><strong>{title}</strong></h3>
              <div className="flex justify-between items-center gap-4">
                <p className="flex-1">{description}</p>
                <p className="text-blue-600 text-xl"><strong>${price}</strong></p>
              </div>
            </div>
            <div className="text-center">
              <Link to={'/'}>
                <button className="rounded shadow bg-green-600 text-white p-2">Back</button>
              </Link>
            </div>
          </section>
      }
    </div>
  );
}

export default ProductDetailsPage;
