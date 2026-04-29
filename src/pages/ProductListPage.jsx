import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { use } from "react";
import { useParams } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
 

const params = useParams(); 

  return (
    <div className="ProductListPage">
      {/* Render list of products here */


          // Code to run when the component mounts
          useEffect(() => {
            // Fetch products from the API and update the state
            axios.get("https://fakestoreapi.com/products")
          .then((response) => {
            // Handle success
            setProducts(response.data);
            console.log(response);
          })
          .catch((error) => {
            // Handle error
            console.log(error);
          });
          }, [])


          //  ^ [] Means the effect will run only once, when the component mounts
         }
       
  
      {/* /**************************************** */}


  // code to run when the component updates (when the products state changes)
  


          
  {/* /**************************************** */}
          {
            products.map((product) => (
          
      <table key={product.id} style={{ border: "1px solid black", margin: "10px", padding: "10px", backgroundColor: "#fefcfcf6" }}>
        <Link to ={`/product/details/${product.id}`}>
        return(
        <tr>
           <td>{<img src={`${product.image}`} alt={product.title} style={{border: "1px solid black"}}/>}</td>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{product.price} $</td>
            <td>{product.description}</td>
            </tr>)
            </Link>
           </table>
          ))}
    
     
      
      
      
      
    </div>
  );
}

export default ProductListPage;
