import axios from "axios";
import { useState, useEffect } from "react";

const singleCartURL = "https://fakestoreapi.com/carts/5";
const allProductsURL = "https://fakestoreapi.com/products";

export default function CartPage() {
    // The state variable `cart` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the single cart details).
  const [cart, setCart] = useState({});
  // The state variable `products` is currently an empty array [],
  const [products, setProducts] = useState([]);

  let productsIds = [];

  // To fetch the cart details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    /* console.log("useEffect hook - fetching cart"); */
    axios.get(singleCartURL).then((response) => {
        setCart(response.data);
        /* console.log(response.data.products) */
        productsIds = response.data.products.map(product => product.productId); //me quedo con las ids de los 
        //productos que tiene cart, para luego filtrar los productos del array que devolverá la request al products endpoint 
        return axios.get(allProductsURL); /* --> aquí la segunda request*/
    })
    .then((response) => {
        const allProductsArray = response.data;

        const filterCartProducts = allProductsArray.filter((product) => {
            return productsIds.includes(product.id)
        }) //no utilizo operadores de comparación porque quiero comparar varios, sino quizás podría hacer un map con los operadores de comparación

        console.log(filterCartProducts);
        
        setProducts(filterCartProducts);
    })
    .catch((error) => { //Establece un catch por si ocurre algún error al traer la información
      console.log(error);
    })
  }, []);

  return (
    <div>CartPage</div>
  )
}
