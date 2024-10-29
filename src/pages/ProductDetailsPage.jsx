import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {

  const {productId} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      setProduct(response.data)
    })
    .catch((e) => {
      console.log(e)
    })
  }, [productId])
 
  return (

    <>
      {product ? 
      <div className="product">
        <img src={product.image} alt={product.title}/>
        <h1>{product.title}</h1>
       <p>{product.description}</p>
       <p>Price: {`€${product.price}`}</p>
       <p>Rating: {product.rating.rate}</p>
       <p>Out of: {product.rating.count}</p>
    </div>
    : <p>Loading</p>
      }
    </>
    
  );
}

export default ProductDetailsPage;
