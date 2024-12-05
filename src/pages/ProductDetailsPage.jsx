import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

  fetchProductDetails();
}, [productId]); 


return (
  <div className="ProductDetailsPage">
    <h1 className="text-center my-4">{product.title}</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" /> 
        </div>
        <div className="col-md-6">
          <h5 className="card-title">Descripción</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>Precio: ${product.price}</strong></p>
          <div className="d-flex">
            <button className="btn btn-primary me-2">Agregar al carrito</button> 
            <button className="btn btn-success" onClick={() => navigate(-1)}>Back</button> 
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default ProductDetailsPage;
