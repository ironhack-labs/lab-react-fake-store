import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const {productId} = useParams()


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect (()=>{
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) =>response.json())
    .then((data) => setProduct(data)) // guardar la data que hem transformat a json la línia anterior a l'estat de products
    .catch((error) => console.log(error))
  }, [productId]) // es torna a executar quan canvia productId

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      {product ? (
        <>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.price}€</p>
          <p>{product.description}</p>
        </>
      ) :(
        <p>...loading</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
