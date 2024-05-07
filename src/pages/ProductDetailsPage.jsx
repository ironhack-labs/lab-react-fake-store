import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/style/ProductListPage.css"

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const { productId } = useParams();


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => { console.log(error) })
  }, [productId])


  return (
    <>{product ?
        
      <div className="ProductDetailsPage">
        {/* Render product details here */}
         <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>{product.descrption} </p>
          <p>{product.category}</p>
          <p>{product.rating.rate}</p>
          <p>{product.rating.count}</p>
          <Link to="/"><button>Go back</button></Link>
        </div>
      </div>
      : <p>Loading data</p>}

    </>
  );
}

export default ProductDetailsPage;
