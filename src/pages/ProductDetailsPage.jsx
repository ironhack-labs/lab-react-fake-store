import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = () => {
    axios
      .get(`${API_URL}/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} />
      <Link to={"/"}><button>volver al listado</button></Link>
    </div>
  );
}

export default ProductDetailsPage;
