import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  const params = useParams();

  const [product, setProduct] = useState({});

  console.log(params.productId);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((respuesta) => {
        return respuesta.json();
      })

      .then((respuesta) => {
        //4. almacenamos la data en el estado
        console.log(respuesta);
        setProduct(respuesta);
        
      })
      .catch((error) => {
        console.log(error);
        // redireccionar el usuario a la pagina "/error"
      
      });

  }, [params.productId]);
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="card">
      {/* Render product details here */}
     
     
            {/* Enlace a la página de detalles del producto */}
         
            <img width="100px" src={product.image}/>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
       
      <Link  to = "/"> <button className="btn-secondary" > button </button> </Link>
    </div>
  );
}

export default ProductDetailsPage;
