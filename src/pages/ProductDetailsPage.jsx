import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (response.ok) {
        const parsed = await response.json();
        setProduct(parsed);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="ProductDetailsPage">
      <img className="productImage" src={product.image} alt={product.title} />
      <div className="details"> 
        <div className="catPrice">
        <label>{product.category}</label>
        <p className="price">${product.price}</p>
        </div>
        <p className="title">{product.title}</p>
        <p className="productDesc">{product.description}</p>
        <Link to="/">
          <button className="btn-primary">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
