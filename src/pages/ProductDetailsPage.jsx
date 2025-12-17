import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const uniqueProductUrl = `https://fakestoreapi.com/products/${productId}`;
    fetch(uniqueProductUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("datas : ", data);
        setProduct(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div className="product_image">
        <img src={product.image} alt={product.description} />
      </div>
      <h1>{product.title}</h1>
      <p>{product.category}</p>
      <div className="information_product">
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
