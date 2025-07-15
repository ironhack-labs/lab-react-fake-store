import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CartPage() {
  const [cartProduct, setCartProduct] = useState([]);
  const BASE_URL = "https://fakestoreapi.com";

  useEffect(() => {
    const p1 = axios.get(BASE_URL + "/carts/" + 5);
    const p2 = axios.get(BASE_URL + "/products");

    Promise.all([p1, p2])
      .then((response) => {

        const allProducts = response[1].data;
        const cartProducts = response[0].data.products;

        const result = [];

        cartProducts.forEach((product) => {
          const res = allProducts.find((p) => product.productId === p.id);
          result.push(res);
        });

        setCartProduct(result);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  }, []);

  return (
    <div>
      {cartProduct.map((product) => {
        return (
          <div className="productItem">
            <img className="image" src={product.image} />
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;
