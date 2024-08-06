import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  const fakeProductAPI = `https://fakestoreapi.com/products/${productId}`;
  console.log(fakeProductAPI);
  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(fakeProductAPI)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("Error fetching product: ", error));
  }, [productId]);
  return (
    <div className="ProductDetailPage">
      {product ? (
        <div>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
