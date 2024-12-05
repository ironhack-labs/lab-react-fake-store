import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  console.log(productId);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useState(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <div className="d-flex align-items-start border rounded bg-light flex-column gap-5 m-5 p-5">
        <img className="border border-black" width="250px" src={product.image} alt={product.title} />
        <div className="">
          <label className="py-1 px-2 col-12 text-light fw-bold text-start bg-primary rounded">{product.category}</label>
        </div>
        <h2 className="fs-2 fw-bold">{product.title}</h2>
        <div className="d-flex flex-row">
          <p className="col-6 text-start">{product.description}</p>
          <p className="text-primary fw-bold">${product.price}</p>
        </div>
        <Link to={"/"} className="mx-auto">
          <button className="bg-success btn text-light">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
