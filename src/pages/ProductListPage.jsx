import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  
  async function getProducts () {
    try{
      const response = await fetch("https://fakestoreapi.com/products");
      const responseData = await response.json();
    setProducts(responseData)
    } catch (err) {
      console.log(err)
    }   
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log("prod:", products)


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((item) => {
        return (
          <>
            <Link to={`/product/details/${item.id}`}>
              <div className="product-container" key={item.id}>
                <img
                  className="product-img"
                  src={item.image}
                  alt={item.title}
                />
                <p className="product-title">{item.title}</p>
                <p className="product-cat">{item.category}</p>
                <p className="product-price">{item.price}</p>
                <p className="product-description multi-line-clip">
                  {item.description}
                </p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default ProductListPage;