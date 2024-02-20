import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const navigate = useNavigate()

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const params = useParams();
  console.log(product);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.productId]);

  if (product === null) {
    return <h3>... buscando detalles del producto</h3>;
  }
  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <img src={product.image} alt={product.title} width="200px"/>
      <p>{product.category}</p>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>{product.price}</h2>
      <button onClick={() => navigate("/")}>Atras</button>
    </div>
  );
}

export default ProductDetailsPage;
