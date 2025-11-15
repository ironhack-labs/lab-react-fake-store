import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




function ProductDetailsPage() {
  // The state variable `product` is currently used to store the response
  // from the Fake Store API (the product details).
   const { productId } = useParams();

  const [product, setProduct] = useState(null);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
useEffect(() => {
  if (!productId) return;
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => setProduct(data))
    .catch((error) => {
      console.error("Failed to fetch product:", error);
      setProduct(null);
    });
}, [productId]);


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
     <h1>Product Details</h1>
      <p>Selected Product ID: {productId}</p>
      {product ? (
        <div className="product-details">
          <h2>{product.title}</h2>
          {product.image && (
            <img src={product.image} alt={product.title} style={{ maxWidth: 200 }} />
          )}
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
        </div>
      ) : (
        <p>Loading product.</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
