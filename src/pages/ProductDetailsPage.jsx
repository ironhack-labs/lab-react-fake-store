import classes from "../styles/ProductDetailsPage.module.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const { productId } = useParams();
  // To fetch the product details, set up an effect with the `useEffect` hook:
  const fetchProductDetails = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        throw new Error("Error while fetching product details");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div className={classes.container}>
      <img
        src={product.image}
        alt="Product Image"
        className={classes.imgContainer}
      />
      <span className={classes.category}>{product.category}</span>
      <h3 className={classes.heading}>{product.title}</h3>
      <div className={classes.descPrice}>
        <p className={classes.description}>{product.description}</p>
        <p className={classes.price}>{`$${product.price}`}</p>
      </div>
      <div className={classes.link}>
        <span></span>
        <Link to={"/"}>
          <button type="button" className={classes.backBtn}>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
	


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    </div>
  );
}

export default ProductDetailsPage;
