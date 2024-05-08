import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') //PROMESA
      .then(respuesta => {
        return respuesta.json()
        
      })
      .then((respuesta) => {
        console.log(respuesta)
        setProducts(respuesta);
      })
    .catch((error)=>{
      console.log(error)
    })
  }, []);

   
    //5. gestor de espera
    if(products === null){
      const esperar = "esperar"
      return esperar
    }

  return (
    <div className="ProductListPage">  {/* poner aqui la lista de productos */}
   
    {products.map((eachProduct)=>{
    return(
      
      <div className="card" key= {eachProduct.id}>
           <Link to={`/product/details/${eachProduct.id}`}>
      
      <img width="50px" src={eachProduct.image}/>
      <p>{eachProduct.title}</p>
      <p>{eachProduct.price}</p>
      <p>{eachProduct.category}</p>
      <p>{eachProduct.description}</p></Link> 
      </div>
  
    )
})}
   

    </div> 
  );
}

export default ProductListPage;
