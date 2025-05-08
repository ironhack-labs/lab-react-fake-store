import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  // To fetch the product details, set up an effect with the `useEffect` hook:
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        //console.log('load single product data', data);
        setProduct(data);

      })
      .catch(err => console.log(err));
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div className='productCategoryDetail'>
        <img src={product.image} alt='a product' />
        <div className='category'>{product.category}</div>
      </div>
      <h1 className='productTitle'>{product.title}</h1>
      <span>
        <p className='productDetailDescription'>{product.description}</p>
        <p><b>{product.price} Cash</b></p>
      </span>
    </div>
  );
}

export default ProductDetailsPage;
