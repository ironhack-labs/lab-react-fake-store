import { useState , useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            //console.log(reponse)
            setProducts(response.data);
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])


  return (
    
    
    <div className="ProductListPage">
      { products && products.map((product)=>{
                return(
                  <Link to = {`/product/details/${product.id}`}><div>
                      <article key={product.id}>
                          <img className="product-img" src={product.image}></img>
                          <h3>{product.title}</h3>
                          <p>{product.category}</p>
                          <p><strong>${product.price}</strong></p>
                          

                      </article>
                    </div>
                    </Link>
                )
            })}
    </div> 
   
  );
}

export default ProductListPage;




  

