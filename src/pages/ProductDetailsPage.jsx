import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams()
  const navigate = useNavigate();
  const getProductsDetail = `https://fakestoreapi.com/products/${productId}`
  const [product, setProduct] = useState({});
  
  useEffect(() => {

    fetch(getProductsDetail)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch((err) => console.log(err));
  }, [productId])

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <div key={product.id} className="details">
        <img src={product.image} className="details-img" />
        <p className="details-category">{product.category}</p>
        <p className="details-name">{product.title}</p>
        <div className="details-box">
          <p className="details-info">{product.description}</p>
          <p className="details-price">${product.price}</p>
        </div>
        <hr />
        <button onClick={() => navigate('/')} className="back-button">Back</button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
