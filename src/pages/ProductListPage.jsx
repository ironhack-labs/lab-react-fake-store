import axios from 'axios';
import { useEffect, useState} from 'react';
import {Link } from 'react-router-dom';

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).

  const [products,setproducts] = useState([]);

  useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
      .then((response)=>{
          console.log(response.data)
          setproducts(response.data)

      })
      .catch( e=> console.log("Error getting characters from API",e))
  }, []);

   if (products === null){
      return <h2>Loading ...</h2>
   }


  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage"  >
      
        {products.map((product) => (
          
          <Link key={product.id} to={`/product/details/${product.id}`}>
    
          <div className='card' > 
            <div
                 style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '150px',
                  height: '150px',
                  borderRadius: '10px',
                  border:'solid thin black',
                 }}>
              
            </div>
            
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <p className="limited-text">{product.description}</p>
              
        
          </div>
          </Link>
        ))}
        
    </div>
  );
}

export default ProductListPage;
