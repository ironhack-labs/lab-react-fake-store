import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./productListStyle.css"



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setProducts(null)
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      setProducts(data)
    } catch(error) {
      console.log("error")
    }
  }
  
  if(products === null) {
    return <h1>Esperando...</h1>
  }



  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => {
        console.log(eachProduct)
        return (
          <Link to={`/product/details/${eachProduct.id}`} key={eachProduct.id}>
            <div>
            <div className="productList">
                <img src={eachProduct.image} className="imageContainer" alt="" />
              {/* <div className="text" > */}
                <p className="title">{eachProduct.title}</p>
                <p className="category">{eachProduct.category}</p>
                <p className="price">${eachProduct.price}</p>
                <p className="description">{eachProduct.description}</p>
              {/* </div> */}
            </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
