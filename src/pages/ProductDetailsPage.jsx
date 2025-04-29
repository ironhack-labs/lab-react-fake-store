import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <div className="details-container">
        {product.image && <img src={product.image} />}
        <div className="details-text-container">
          <p>{product.description}</p>
          <p>{product.category}</p>
          <p>${product.price}</p>
        </div>
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
