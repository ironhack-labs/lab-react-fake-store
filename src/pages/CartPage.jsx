import classes from "../styles/ProductCard.module.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CartPage = () => {
  const { cartId } = useParams();
  const [cartDetails, setCartDetails] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProduct = async (productId, quantity) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (response.status === 200) {
        const productWithQuantity = { ...response.data, quantity };
        return productWithQuantity;
      } else {
        throw new Error(`Error while fetching product id:${productId} data`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProductDetails = async (products) => {
    try {
      const productArray = products.map((currentProduct) => {
        return fetchProduct(currentProduct.productId, currentProduct.quantity);
      });
      const allProducts = await Promise.all(productArray);
      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCartDetails = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/carts/${cartId}`
      );
      if (response.status === 200) {
        setCartDetails(response.data.products);
        await fetchProductDetails(response.data.products);
      } else {
        throw new Error("Error while fetching cart data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartDetails();
  }, []);

  return (
    <>
      <h2>Your Cart</h2>
      {products.map((currentProduct) => {
        return (
          <div key={currentProduct.id} className={classes.cardContainer}>
            <img
              src={currentProduct.image}
              alt="Product Image"
              className={classes.imgContainer}
            />
            <p>{currentProduct.title}</p>
            <p>{currentProduct.category}</p>
            <p>{currentProduct.price}</p>
            <p>{currentProduct.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default CartPage;