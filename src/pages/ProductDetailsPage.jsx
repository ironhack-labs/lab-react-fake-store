import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }, [id]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <h1>Product Name {product.name}</h1>
      <img src={product.image} alt={product.name} style={{ height: "300px" }} />
    </div>
  );
}

export default ProductDetailsPage;
