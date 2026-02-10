import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
        setProduct(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleBackButtonClick = (() => {
    navigate("/")
  })



  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <br />
      <div className="Product-details-container">
        <div className="Product-details">
          <img src={product.image} alt="product" />
          <p className="category">{product.category}</p>
          <p className="title">{product.title}</p>
          <div className="product-description">
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
          </div>
        </div>
        <hr />
        <button className="backButton" onClick={handleBackButtonClick}>Back</button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
