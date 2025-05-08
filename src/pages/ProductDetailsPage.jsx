import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Oops. There's an error.");
        console.log(error);
      });
  }, [productId]);

  return (
<div className="detailed-page">
<Link to="/" className="back-button">
            <button>Back</button>
          </Link>
    <div className="product-details">
      {product && product.title ? (
          <div className="block">
            <img src={product.image} alt={product.title} />
            <div className="info">
              <h2>{product.title}</h2>
              <p className="rating">
                {product.rating.rate}/5 ({product.rating.count} Ratings)
              </p>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
          </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
    </div>
  );
}

export default ProductDetailsPage;
