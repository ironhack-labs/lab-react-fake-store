import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  const getData = async () => {
    try {
      const response = await fetch ("https://fakestoreapi.com/products")
      const data = await response.json()
      console.log(data)
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="ProductListPage">
      <ul>
        {products.map((producto) => {
          return (
            <Link to={`/product/details/${producto.id}`} >
            <li key={producto.id} style={{display:"flex",alignItems:"center",height:"200px",border:"2px solid black",margin:"10px",padding:"10px"}}>
              <img style={{height:"150px"}} src={producto.image} alt="" />
              <h2>{producto.title}</h2>
              <h4>{producto.category}</h4>
              <h4>€{producto.price}</h4>
              <h4>{producto.description}</h4>
            </li>
            </Link>
          )
        })}
      </ul>
    </div>
  );
}

export default ProductListPage;
