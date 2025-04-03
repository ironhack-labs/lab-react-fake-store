import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {Object.keys(product).length > 0 ? (
        <div className="product-details">
          <div className="product-details-img">
            <img src={product.image} alt={product.title} />
          </div>
          <p className="product-details-category">{product.category}</p>
          <p className="product-details-title">{product.title}</p>
          <div className="about-product">
            <p className="product-details-description">{product.description}</p>

            <p className="product-details-price">
              ${product.price}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
