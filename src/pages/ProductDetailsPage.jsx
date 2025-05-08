import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  const { productId } = useParams();


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })

      .catch((error) => {
        console.log("Error getting product details from the API", error);
      })
    // Handle errors appropriately, e.g., display an error message
  }, [])


  return (
    <div className="ProductDetailsPage">
      {product &&
        <div className="card" key={element.id}>
          <img src={element.image} alt={element.title} />
          <p>{element.title}</p>
          <p>{element.category}</p>
          <p>{element.price}€</p>
          <p>{element.description}</p>
        </div>
      }
      <Link to="/">Back</Link>
    </div>
  );
}



export default ProductDetailsPage;
