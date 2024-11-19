import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  useEffect(() => {
    async function getOneProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Fetch product details error:", error);
      }
    }
    getOneProduct();
  }, [productId]);


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className='ProductDetailsPage'>
      <div className='product'>
        <img src={product.image} alt={product.title} />
        <p className='label'>{product.category}</p>
        <strong>{product.title}</strong>
        <div className="text">

        <p>{product.description}</p>
        <p className="price">${product.price}</p>

        </div>
      </div>
      <div className="bottom page">
        <div className="shadow-line"></div>
        <Link to='/' className='back-btn'>
          Back
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
