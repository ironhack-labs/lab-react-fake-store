import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Product:", data);
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div className="card mb-1">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt={product.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title fw-bold">{product.title}</h3>
              <h5 className="card-title">{product.category}</h5>
              <h5 className="card-title fw-bold">{product.price}</h5>
              <p className="card-text">{product.description}</p>
              <Link to="/">
              <button className="btn btn-primary" type="submit">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
