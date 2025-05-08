import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setProductDetails(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  if (productDetails === null) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div className="ProductDetailsPage">
      <h2>{productDetails.title}</h2>
      <img src={productDetails.image} alt="img-product" />
      <p> {productDetails.category}</p>
      <p>${productDetails.price}</p>
      <p>{productDetails.description}</p>
      <Link to="/">
        <button type="button" className="btn btn-tertiary">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
