import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"


function ProductDetailsPage() {
  const {productId} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{

    async function fetchProduct(params) {
      try{
        const resolve = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!resolve.ok) throw new Error('Network response not Okay :(')
        console.log("status:", resolve.status);
        console.log("ok:", resolve.ok);
        const data = await resolve.json();
        setProduct(data);
      }catch (error){
        setError(error.message);
      }finally{
        setLoading(false);
      }
    }
    fetchProduct()
  },[productId])

if (loading) return <p> Loading product...</p>
if (error) return <p>Error: {error}</p>
  return (
    <div className="ProductDetailsPage">
            <img src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
