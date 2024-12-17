import '../pages/listPage.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const fetchProducts = async() => {
    try {
      const response = await fetch ('https://fakestoreapi.com/products')
      if (response.ok) {
      const productsData = await response.json()
      console.log(productsData)
      setProducts(productsData);
      setLoading(false);
      
      }
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

useEffect(() =>{
  console.log('Using Effect Method')
  fetchProducts()
}, [] )

  return (
    <div className="ProductListPage">
      <ul>
        {products.map((product) =>(
          <li key={product.id}>

            <Link to={`./product/details/${product.id}`}>
          
            <button className='eachProductStyle' type="button">

            <h2><strong>{product.title}</strong></h2>

            <img className='eachProductStyle' src={product.image} width="120" />

            <p>{product.description}</p>

            <p>{product.category}</p>

            <p><strong>${product.price}</strong></p>

            </button>
            </Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default ProductListPage;
