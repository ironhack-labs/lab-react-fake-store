import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => {console.error(err); });
  }, [productId]);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <h3>Category: {product.category}</h3>
      <h3>Price: ${product.price}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
