import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData()

  }, [])

  async function getData() {

    try {
      const data = await axios.get('https://fakestoreapi.com/products')
      setProducts(data.data)
      console.log(data.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="ProductListPage product-list">
      {/* Render list of products here */}
      {products.map((product) =>{
        return (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div className="card product-card">
              <img src={product.image} alt={product.title} />
              <h1 className='product-card-title'>{product.title}</h1>
              <p className="product-card-category">{product.category}</p>
              <p className='product-card-price'>${product.price}</p>
              <p className='product-card-description'>{product.description}</p>
            </div>
          </Link>

        )
      })}
    </div>
  );
}

export default ProductListPage;
