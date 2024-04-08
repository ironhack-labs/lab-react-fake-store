
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function ProductListPage() {

  const [products, setProducts] = useState([]);



  const getProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`)
      if (response.ok) {
        const productsData = await response.json()
        setProducts(productsData)
        console.log(productsData)
      }

    }
    catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getProducts()
  }, [])



  return (
    <div className="ProductListPage">
      {/* Render list of products here */}

      <div className="container">
        <h1 className="title">Products List</h1>
        <ul className="product-list">
          {products.map(product => (
            <div key={product.id}>

              <Link to={`/product/details/${product.id}`}>

                <li className="product-item">

                  <img className="product-image" src={product.image} alt="" />

                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">Price: ${product.price}</p>
                </li>
              </Link>

            </div>




          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductListPage;
