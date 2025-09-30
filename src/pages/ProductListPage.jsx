import { useState } from "react";
import { useEffect } from "react";
import  axios  from "axios";
import { Link } from "react-router-dom";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    const getProductDetail=async ()=>{
     try {
      const {data} = await axios('https://fakestoreapi.com/products');
      console.log(data);
      setProducts(data);
     } catch (error) {
      console.log('We got an error resault')      
     }
     }
     getProductDetail();
  }
  ,[]);
  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <div className="ProductDetailsPage">
      <h2>All the products</h2>
       <div>
        {products.map((p)=>(
          
          <div key={p.id} className="ProductCard">
             <Link to ={`/product/details/${p.id}`} >
            <img src={p.image} alt={p.title} width={120}/>
            <h3>{p.title}</h3>
            <p>Price:${p.price}</p>
            <p>Description:{p.description}</p>
            <p>Category:{p.category}</p>
            <p>Rating:{p.rating.rate}⭐({p.rating.count} Ratings)</p>  
            </Link>         
          </div>
                 
        ))}
       </div>
    </div>
      </div>
      
  );
}

export default ProductListPage;
