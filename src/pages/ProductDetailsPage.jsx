import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {

  // 1. Get the product ID from the URL
  const { productId } = useParams();

  // 2. Create the state
  const [product, setProduct] = useState(null);

  // 3. Fetch the selected product
  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${productId}`)

      // 4. Convert response to JSON
      .then((response) => response.json())

      // 5. Save product in state
      .then((data) => {
        setProduct(data);
      })

      // 6. Handle errors
      .catch((error) => {
        console.log(error);
      });

  }, [productId]);

  // 7. Wait for the product to load
  if (!product) {
    return <p>Loading product...</p>;
  }

  // 8. Render product details
  return (
    <div>
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        width="200"
      />

      <p>{product.description}</p>

      <h3>{product.price} €</h3>

      <p>Category: {product.category}</p>

      <p>Rating: {product.rating.rate} / 5</p>
    </div>
  );
}

export default ProductDetailsPage;