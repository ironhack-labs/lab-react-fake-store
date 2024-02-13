import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetails = () => {
      axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
          setProduct(response.data);
        })
        .catch(error => {
          console.error("Error fetching product details:", error);
        });
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <h1>Product Details</h1>

    <div>
    <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <img src={product.image} alt={product.title} style={{ maxWidth: "300px" }} />
    </div>
    </div>
  );
}

export default ProductDetailsPage;
