import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => {
        console.log("Error getting character details from the API...");
        console.log(e);
      });
  }, []);

  return (
    <div className="ProductDetailsPage">
      {product ? (
        <>
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
