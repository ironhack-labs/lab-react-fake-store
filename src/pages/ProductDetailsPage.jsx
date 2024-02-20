import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const params = useParams()

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
      setProduct(response)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  if (product === null) {
    return <h2>...Buscando detalles del producto</h2>
  }



  return (
    <div className="ProductDetailsPage">
     <img src={product.image} alt="producto" width={"400px"}/>
        <div>
        <span style={{backgroundColor: "blue", color: "white"}}>{product.category}</span>
        <h3>{product.tittle}</h3>
        <h3>{product.price}$</h3>
        <h3>{product.description}</h3>
        </div>
        




    </div>
  );
}

export default ProductDetailsPage;
