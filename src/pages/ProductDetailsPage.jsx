import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((e) => console.error(e));
  }, []);

  if (!product.id) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      <div className="image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="details">
        <h2 className="title">{product.title}</h2>
        <div className="category">{product.category}</div>
        <div className="price">${product.price?.toFixed(2)}</div>
        <div className="desc">
          <h3>Description:</h3>
          {product.description}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
