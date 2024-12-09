import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => setProduct(response.data))
    .catch((error) => console.log(error))
  }, [productId] );


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      <div className="card mb-3" style={{ maxWidth: "350px" }} key={product.id}>
        <div className="row g-0">
            <div className="col-md-4 border-2 p-1">
                <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
            </div>
            <div className="col-md-8 m-3">
                <div className="card-body">
                  <p className="product-category rounded border m-3">{product.category}</p>

                  <h5 className="card-title font-semibold">{product.title}</h5>
                  <p className="card-text"><small>{`$${product.price}`}</small></p>
                  <p className="card-text"><small>{product.description}</small></p>
                </div>
            </div>
        </div>
      </div>
      <Link to="/" className="mt-3 px-6 py-2 bg-green-500 text-white rounded">Back</Link>
    </div>
  );
}

export default ProductDetailsPage;
