import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((jsonResponse) => setProducts(jsonResponse))
      .catch((error) => console.error(error)) // The console.error displays it with a red background in the browser console
    // .then((jsonResponse) => console.table(jsonResponse.results)) // we can console.table the results to have them in a table format in the console

  }, []) // DON'T FORGET THE EMPTY ARRAY HERE!!!! ⚠️



  return (
    <div className="ProductListPage">
      <ul>

        {/* Render list of products here */


          products.map((product) => (
            <li key={product.id}>

               <Link to={`/product/details/${product.id}`}>{product.name}
               
               <p> {product.title}</p>
                <img src={product.image}/>
                <p> {product.id}</p>
                <p> {product.price}</p>
                <p> {product.description}</p>
                <p> {product.category}</p>
                
                </Link>

               
                
            </li>
          ))}
      </ul>
    </div >
  );
}

export default ProductListPage;



