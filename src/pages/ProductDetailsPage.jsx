import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    // setProducts(null);
    try {
      setIsFetching(true);
      const apiResponse = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      console.log(apiResponse);
      setIsFetching(false);
      setProduct(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ProductDetailsPage">
      <img className="img-detail" src={product.image} alt="" />
      <p className="product-category product-category-secondary">{product.category}</p>
      <p className="product-title-secondary">{product.title}</p>
      <div className="description-price">
        <p className="product-description product-description-secondary">{product.description}</p>
        <p className="product-price product-price-secondary">${product.price}</p>
      </div>

      <button className="btn-primary" onClick={handleOnClick}>
        Back
      </button>
    </div>
  );
}

export default ProductDetailsPage;
