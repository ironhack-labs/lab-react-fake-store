import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function ProductDetailsPage(props) {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const {productId} = useParams();

  const {id} = props;

  useEffect(()=>{
    axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((response)=>{
      setProduct(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
},[])

  return (
    <div className="ProductDetailsPage">
    {product &&
                <article key={product.id}>
                <img src={product.image}/>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <p>{product.description}</p>
                </article>
            }
    </div>
  );
}

export default ProductDetailsPage;
