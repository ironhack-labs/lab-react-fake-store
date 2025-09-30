import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import  axios  from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const { productId }=useParams()
 useEffect(()=>{
   if (!productId) return;
    const getProductDetail=async ()=>{
     try {
      const {data} = await axios(`https://fakestoreapi.com/products/${productId}`);
      console.log(data);
      setProduct(data);
     } catch (error) {
      console.log('We got an error resault')      
     }
     }
     getProductDetail();
  }
  ,[productId]);
 


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
      <h2>{product?.title}</h2>
       <div className="ProductCard">
            <img src={product?.image} alt={product?.title} width={160}/>
            <h3>{product?.title}</h3>
            <p>Price:${product?.price}</p>
            <p>Description:{product?.description}</p>
            <p>Category:{product?.category}</p>
            <p>Rating:{product?.rating.rate}⭐({product?.rating.count} Ratings)
              </p>           
          </div>        
       </div>
     );
}

export default ProductDetailsPage;
