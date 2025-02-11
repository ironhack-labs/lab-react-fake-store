import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  //store product
  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const { productId } = useParams();
  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {

    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      //to handle error
      .catch(e => console.log('Error', e));
  }, [productId]);

  //to display 'Loading',if page is still loading
  if (product === null) {
    return <h2>Loading...</h2>
  }


  return (


    <div className="ProductDetailsPage">
      {/* Render list of products here */}

      <img src={product.image} alt={product.title} />
      <p> <label>  {product.category}  </label> </p>
      <h2> <b> {product.title}  </b></h2>
      <div className="info">
        <p> {product.description}</p>
        <p> ${product.price}</p>
      </div>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>


  );
}

export default ProductDetailsPage;
