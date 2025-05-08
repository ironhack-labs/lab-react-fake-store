import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const {productId} = useParams();

  useEffect(() =>{
    fetch (`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
    .then((data) => setProduct(data))
    .catch ((error) => console.log(error))
  }, [])

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  return (
    <>
    {product &&
        <div className="ProductDetailsPage">

        <div className="container" key={product.id}>
            <img className="image" src={product.image} alt="product image" />
            <p className="title">{product.title}</p>
            <p className="category">{product.category}</p>
            <p className="price">{`${product.price}€`}</p>
            <p className="description">{product.description}</p>
          </div>
          <Link to={`/`} >
          <button className="button">Back</button>
          </Link>
    
        </div>
    }


    </>
  );
}

export default ProductDetailsPage;
