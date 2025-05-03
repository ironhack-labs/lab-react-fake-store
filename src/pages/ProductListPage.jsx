import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../helpers/constants";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () =>{
    
    try{
      const response = await fetch(`${API_URL}/products`); // waiting for promise to be executed, if resolved, returns a response with requested data
      if(response.ok) {
        const parsedData = await response.json(); //returns another promise if requested data was parsed to json format
        setProducts(parsedData);  // results property of the parsed object contains list of products => see API documentation
        console.log("Data format of the returned products: ", parsedData);
      }
      //else throw new Error(response.status);
    }
    catch (error) {
      console.log(error)
    }

  }

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetchAllProducts()
  }, []); // [] Means the effect/code will run only once, when the component mounts/loads


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map(currentProduct => ( // implicit return using => & (), no curlies
        <Link key={currentProduct.id} to = {`/products/${currentProduct.id}`} >
          <div className="listing-div">
              <div className="img-div">
                <img src={currentProduct.image} alt={currentProduct.title} />
              </div>
              <div className="info-div">
                <p className="product-title">{currentProduct.title}</p>
                <p>{currentProduct.category}</p>
                <p> {`${currentProduct.description.split(' ').slice(0, 9).join(' ')} ....`} </p> 
              </div>
          </div>
        </Link>
      ))}
    </div>
  );
  
}

export default ProductListPage;

/* fetching data using axios:
1. npm install axios
2. import axios from 'axios' (in the component)

3. Example usage:

  axios.get("https://example.com/example-endpoint")
    .then((response) => {
      // Handle success
      console.log(response);
    })
    .catch((error) => {
      // Handle error
      console.log(error);
    })
*/