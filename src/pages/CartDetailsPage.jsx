import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CartDetailsPage() {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { cartId } = useParams();
  async function getCart(cartId) {
    const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`);
    const data = await response.json();
    // console.log(data.products);
    setCartProducts(data.products);
    cartProducts.forEach(async (product) => {
      const response2 = await fetch(
        `https://fakestoreapi.com/products/${product.productId}`
      );
      const data2 = await response2.json();
      console.log("product", data2);
    });
  }

  useEffect(() => {
    getCart(cartId);
  }, [cartId]);
  console.log("cart", cartProducts);

  return <div>{}</div>;
}
