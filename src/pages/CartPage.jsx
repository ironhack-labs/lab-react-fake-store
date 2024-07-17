import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CartPage = () => {
  const { cartId } = useParams();
  const [items, setItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/${cartId}`)
      .then((res) => {
        setItems(res.data.products);
        return res.data.products;
      })
      .then((products) => {
        const productRequests = products.map((product) =>
          axios.get(`https://fakestoreapi.com/products/${product.productId}`)
        );
        return Promise.all(productRequests);
      })
      .then((responses) => {
        setProductDetails(responses.map((res) => res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cartId]);

  return (
    <div>
      <h1>Cart</h1>
      <p>Items in cart: {items.length}</p>
      {productDetails.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default CartPage;
