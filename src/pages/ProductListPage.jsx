import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>{return response.json()}) //la respuesta de la API la pasamos a JSON
    .then((data)=>{  //con la respuesta en JSON, actualizamos el valor de products
      setProducts(data)
    }).catch((error)=>{
      console.log(error)
    }) 
  }, [])


  return (
    <div className="container" >

      { (products === null) ? 

      <h3>Buscando productos</h3>

      : products.map((eachProduct)=>{
        return (
         <Link 
         to={`/product/details/${eachProduct.id}`}>
        <div className="card" >
          <img src={eachProduct.image} alt="" />
          <p><strong>
          {eachProduct.title}
            </strong></p>
          <p>{eachProduct.category}</p>

          <p>{eachProduct.price}</p>

          <p>{eachProduct.title}</p>
        </div> </Link>
        )
      })
     
      }
     
    </div>
  );
}

export default ProductListPage;
