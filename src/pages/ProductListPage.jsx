import { useState , useEffect } from "react";
const fakeStoreApiUrl = 'https://fakestoreapi.com/products'
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch(fakeStoreApiUrl)
      .then((response)=>{
        console.log(response)
        return response.json()
        
      })
      .then((data)=>{
        console.log(data)
        return setProducts(data)})
    
},[])

  return(

    products.map((product) => {
      return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <div>{product.title}</div>
      <Link to={`/product/details/${product.id}`}>
      <img src={product.image} />
      </Link>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <div>{product.category}</div>

      <br />
      <br />
      <br />
    </div>
    )
  })
)
}

export default ProductListPage;
