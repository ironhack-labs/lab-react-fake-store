import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/">Back</Link>

      <div>
        <img src={product.image} alt={product.title} className="product-img" />

        <div>
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.price} €</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;

