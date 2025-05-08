import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
        setProducts(response);
      })
    .catch((error)=>{
      console.log(error)
    })
  }, []);

  if(products === null){
    const wait = "wait";
    return wait;
  }

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}

    {products.map((el)=>{
    return(

      <div className="card" key= {el.id}>
      <Link to={`/product/details/${el.id}`}>
        <img width="50px" src={el.image}/>
        <p>{el.title}</p>
        <p>{el.price}</p>
        <p>{el.category}</p>
        <p>{el.description}</p>
      </Link> 
      </div>

    )
})}


    </div> 
  );
}

export default ProductListPage;
