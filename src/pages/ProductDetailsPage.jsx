import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const {productId} = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(()=>{
    getData();
  },[]);

  async function getData() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const data = await response.json();

      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  if(!Object.keys(product).length) return <h3>Loading page...</h3>

  return (
    <div className="ProductDetailsPage card spacing-lg flex-column">
    {/* Render product details here */}
      <img className="img-300" src={product.image} alt="product image" />
      <label className="label" htmlFor="text">{product.category}</label>
      <h2 className="text-bold">{product.title}</h2>
      <div className="flex-center">
        <p>{product.description}</p>
        <h6 className="text-bold text-blue">$ {product.price}</h6>
      </div>
      <hr />
      <Link className="btn-primary" to={"/"}>Back</Link>
    </div>
  );
}

export default ProductDetailsPage;