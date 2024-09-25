import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const params = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setProduct(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [params.productId])

  if(product.length === 0) {
    return (<h3>...cargando</h3>)
  }

  return (
    <div className="ProductDetailsPage">
      {console.log(product)}
      <div>
        <img src={product.image} alt="" />
        <button className="btn-primary">{product.category}</button>
        <h2>{product.title}</h2>
        <p>{product.description}</p>

      </div>
    </div>
  );
}

export default ProductDetailsPage;
