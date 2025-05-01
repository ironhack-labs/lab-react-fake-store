import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  // The `productId` coming from the URL parameter is available in the URL path.
  let params = useParams();
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${params.productId}`
        );
       
        setProduct(response.data); // axios ya procesa el JSON automáticamente
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (params) {
      // Asegúrate de que params esté definido
      fetchProducts();
    }
  }, [params]); // params como dependencia

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
    </div>
  );
}

export default ProductDetailsPage;
