import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const { cartId } = useParams();

  useEffect(() => {
    const fetchCartAndProducts = async () => {
      try {
        const cartResponse = await axios.get(
          `https://fakestoreapi.com/carts/${cartId}`
        );
        const cartData = cartResponse.data;
        setCart(cartData);

        const productIds = cartData.products.map((item) => item.productId);

        const productPromises = productIds.map((id) =>
          axios.get(`https://fakestoreapi.com/products/${id}`)
        );

        const productsResponses = await Promise.all(productPromises);

        const productsData = productsResponses.map((res) => res.data);

        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch cart or products:", error);
      }
    };

    fetchCartAndProducts();
  }, [cartId]);

  if (!cart) {
    return <div>Loading cart...</div>;
  }

  return (
    <div>
      <h1>Cart ID: {cartId}</h1>
      <h2>Products in Cart:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width={100} />
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
