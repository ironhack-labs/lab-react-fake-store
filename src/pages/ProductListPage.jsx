import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() =>{

    getData()


  }, [])

  const getData = async () =>{

    try{
      const response = await fetch ("https://fakestoreapi.com/products")
      const data = await response.json()
      console.log(data)

      setProducts(data)
    }
    catch(error){
      console.log(error)
    }


  }
  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h3>Productos</h3>
      {products.map((eachProduct) =>{
        return (
          <Link to= {`product/details/${eachProduct.id}`}>
          <div className = "card">
            <img src={eachProduct.image} alt="image"/>
            <h3><strong>{eachProduct.title}</strong></h3>
            <p>{eachProduct.category}</p>
            <p className="description">{eachProduct.description}</p>
            
          </div>
          </Link>
        )

      })}
    </div>
  );
}

export default ProductListPage;
