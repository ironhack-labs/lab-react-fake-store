import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductListPage.css"
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    getData()
  },[])

  const getData = async () => {

    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      setProducts(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => {
        return(
          <Link to={`/product/details/${eachProduct.id}`}>
            <div className="productList" key={eachProduct.id}>
            <img src={eachProduct.image} alt="ProductImage" className="imgList"/>
            <h1>{eachProduct.title}</h1>
            <p>{eachProduct.category}</p>
            <p>{eachProduct.price}</p>
            <p>{eachProduct.description}</p>
          </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
