import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  const detailsUrl = "https://fakestoreapi.com/products/" + productId;

  // To fetch the product details, set up an effect with the `useEffect` hook:

  const handleFetch = async () => {
    try {
      const response = await fetch(detailsUrl);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="ProductDetailsPage">
      <div className="content product-details-image">
        <img src={product.image} alt="product image" />
      </div>
      <div className="content product-details-category">{product.category}</div>
      <div className="content product-details-name">{product.title}</div>
      <div className="details-price-description">
        <div className="content product-details-price">{product.price} €</div>
        <div className="content product-details-description">
          {product.description}
        </div>
      </div>
      <Link to="/">
        <button className="btn-primary">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
