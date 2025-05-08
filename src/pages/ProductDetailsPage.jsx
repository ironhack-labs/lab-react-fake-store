import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOneProduct();
  }, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <div id="detail-page"> 
      
        <img src={product.image} alt={product.title} />
        <p id="category">{product.category}</p>
        <h2>{product.title}</h2>
        
        <div className="first-div">
        <p>{product.description}</p>
        <p className="first-div-price">$ {product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
