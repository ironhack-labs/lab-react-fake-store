import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {});
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price} €</p>
      <p>{product.category}</p>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
