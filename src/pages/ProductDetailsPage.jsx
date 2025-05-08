import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "../context/product.context";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  // const apiURL = "https://fakestoreapi.com/products";

  let { productId } = useParams();

  const { loading, products, getProducts } = useContext(ProductContext);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    if (!products.length) {
      getProducts()
    } else {
      console.log("Product Id ===>", productId)
      console.log("Products at 21 ===>", products)
      let thisProduct = products.find((product) => product.id === Number(productId))
      setProduct(thisProduct)
  
      console.log("This product ===>", thisProduct)
    }
  }, [products, productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">

      {
        product &&
        <div className="details">
          <img src={product.image}  alt="product-image"/>
          <p>{product.category}</p>
          <h1>{product.title}</h1>
          <div className="details-container">

            <p>{product.description}</p>
            <p>{product.price}</p>

          </div>

        </div>
      }

    <hr />

    <Link to='/'>
      <button>Back</button>
    </Link>
    
    </div>
  );
}

export default ProductDetailsPage;
