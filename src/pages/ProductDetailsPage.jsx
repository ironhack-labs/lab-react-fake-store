import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const fetchCharacter = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/:id`);
  };

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
    </div>
  );
}

export default ProductDetailsPage;
