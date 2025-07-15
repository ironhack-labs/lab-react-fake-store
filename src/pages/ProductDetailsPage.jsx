import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  const BASE_URL = "https://fakestoreapi.com";
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

useEffect(() => {
  if (!productId) return; // Evita chiamata inutile se productId è undefined

  axios
    .get(`${BASE_URL}/products/${productId}`)
    .then((response) => {
      setProduct(response.data);
    })
    .catch((e) => {
      console.error("Errore nel caricamento prodotto:", e);
    });
}, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <h2>{product.title}</h2>
      <h3>
        <b>Descrizione:</b>
        <br />
        {product.description}
      </h3>
      <p>Categoria: {product.category}</p>
      <p>Prezzo: ${product.price}</p>
      <img src={product.image} alt={product.title} style={{ width: "150px" }} />
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
