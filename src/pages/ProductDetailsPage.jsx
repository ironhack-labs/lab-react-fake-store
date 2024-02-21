import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const API_URL = "https://fakestoreapi.com";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const {id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div className="ProductDetailsPage" key={product.id}>
      <img style={{height:"200px", width:"200px"}} src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>
    </div>
  );
};

export default ProductDetailsPage;
