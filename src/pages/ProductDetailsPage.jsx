import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//import axios from "axios";

const URL = "https ://fakestoreapi.com/products";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  //const [product, setProduct] = useState({});
  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  useEffect(() => {
    // axios.get(URL).then((response) => {
    //   console.log(response);
    //   setProduct(response.data);
    // });

    // To fetch the product details, set up an effect with the `useEffect` hook:

    fetch(`${URL}/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error data:", error);
      });
  }, [productId]);

  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to="/">
        <button>Back to Products</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
