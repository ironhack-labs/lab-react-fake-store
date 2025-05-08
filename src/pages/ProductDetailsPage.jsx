import axios from "axios";
import { useEffect,useState } from "react";
import { Link,useParams } from 'react-router-dom';


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
 
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then( response =>{
          console.log(response.data)
          setProduct(response.data)
      })
      .catch( e =>console.log("error in", e))
  }, [productId]);
  if (product === null){
      return <h2> Loading...</h2>
  }

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="product-details-page">
    {/* Render product details here */}
    <div>
     <img style ={{
       backgroundSize: 'cover',
       width: '400px%',
        height: '400px',
        border:'solid thin black',
     }} 
     src= {product.image} />
    </div>
      <p className="category-tag">{product.category}</p>
      <h2>{product.title}</h2>
      <div className="product-details-container ">
      <p style ={{
        textAlign:'left',
        width:'700px',
        marginRight:'25px',
      }}>{product.description}</p>
      <p className="price-tag"><strong>${product.price}</strong></p>
      </div>
      
             
            
        <Link className="btn-primary" to="/">
            <button> back </button>
        </Link>
      
        
    </div>
    
  );
}

export default ProductDetailsPage;
