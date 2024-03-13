import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);  

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products") //
        setProducts(response.data);
        
      } catch(err) {
        console.log(err)
      }
    };
      getProducts();
  }, []);


  return (
    <div className="ProductListPage">
      {products && products.map ((oneProduct) => {
        return ( 

          <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
          <div className="card">
            <img src= {oneProduct.image} alt={oneProduct.name} style={{height: '200px'}}/>
            <h3>{oneProduct.title}</h3>
            <h3>{oneProduct.description}</h3>
            <h3>{oneProduct.price}</h3>
            
            </div>
            </Link>
        )   
      })}
    </div>
  );
}

export default ProductListPage;
