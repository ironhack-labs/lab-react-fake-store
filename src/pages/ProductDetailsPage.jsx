import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  const Params = useParams();
  console.log(Params.productId, "useParams");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${Params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ProductDetailsPage">
      <div>
        <img src={product.image} className="product-image"></img>
        <h2 className="product-title"> {product.title} </h2>
        <h2 className="product-price"> ${product.price} </h2>
        <h2 className="product-description"> {product.description} </h2>
        <h2 className="product-category"> {product.category} </h2>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
