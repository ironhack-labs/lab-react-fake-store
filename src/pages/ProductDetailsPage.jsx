import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const{productId} = useParams();
  useEffect(()=>{
    async function getProduct(){
      try{
        const productJson  = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const productData = await productJson.json();
        console.log(productData);
        setProduct(productData);
      }
      catch{(error)=>{
        console.log(error);

      }
        
      }
      
     
    }

    getProduct();
  },[productId])


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage" key={productId}> 
    
            <img src={product.image} alt={product.title}/>
            <h4><strong>{product.title}</strong></h4>
            <h5>{product.category}</h5>
            <h4>${product.price}</h4>
            <p>{product.description}</p>

   
    </div>
  );
}

export default ProductDetailsPage;
