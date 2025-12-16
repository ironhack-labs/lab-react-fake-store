import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    async function getOneProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneProduct();
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
   <div className="product-details">
      <div className="card-details">
        <img src={product.image} alt={product.title} />
        <p className="category">{product.category}</p>
        <h3>{product.title}</h3>
        <div className="price-description">
        <p className="description">{product.description}</p>
        <p id="price">${product.price}</p>
        </div>
      </div>
        <Link to="/" className="back-btn">
          <button>Back</button>
        </Link>
    </div>
  );
}

export default ProductDetailsPage;
