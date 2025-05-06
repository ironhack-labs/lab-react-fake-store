import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const { id } = useParams(); // Pega o ID do carrinho na URL

  useEffect(() => {
    // 1. Buscar os dados do carrinho com ID específico
    fetch(`https://fakestoreapi.com/carts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        return data.products.map((p) => p.productId); // Extrai os IDs dos produtos
      })
      .then((productIds) => {
        // 2. Buscar os detalhes dos produtos usando os IDs do carrinho
        return fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((allProducts) => {
            const cartProducts = allProducts.filter((product) =>
              productIds.includes(product.id)
            );
            setProducts(cartProducts); // Atualiza o estado com os produtos detalhados
          });
      })
      .catch((error) => console.error("Error fetching cart:", error));
  }, [id]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} width="50" />
              <p>{product.title}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading cart...</p>
      )}
    </div>
  );
};

export default CartPage;