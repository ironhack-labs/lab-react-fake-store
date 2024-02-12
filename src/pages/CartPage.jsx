import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CartPage({ products }) {
  const [cart, setCart] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${id}`)
      .then((res) => res.json())
      .then((json) => setCart(json));
  }, [id]);

  const cartProductsIds = cart?.products?.map((product) => product.productId);
  const cartProducts = products?.filter((product) =>
    cartProductsIds?.includes(product.id)
  );

  return (
    <div className="CartPage">
      {cartProducts.map((product) => (
        <div className="ProductCard" key={product.id}>
          <img src={product.image} />
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
