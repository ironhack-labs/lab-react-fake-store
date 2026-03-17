import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './ProductDetailsPage.css'

function ProductDetailsPage() {
  const [product, setProduct] = useState(null); 
  const { productId } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch(err => console.log(err));
  }, [productId]);

  
  if (!product) return <div className="container">Loading...</div>;

  return (
    <div className="ProductDetailsPage container">
      <Link to="/" className="back-link">
        ← Back to Products
      </Link>

      <div className="details-container">
        <div className="details-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-info">
          <span className="details-category">{product.category}</span>
          <h1 className="details-title">{product.title}</h1>
          <p className="details-price">${product.price}</p>
          
          <div className="details-description">
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>

          <Link to={'/'}><button className="add-to-cart-btn">Back</button></Link>
          
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;