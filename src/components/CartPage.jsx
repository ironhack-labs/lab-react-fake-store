import React, { useState, useEffect } from "react";
import axios from "axios";

function CartPage() {
  const [cart, setCart] = useState(null); // Almacenamos los productos del carrito
  const [products, setProducts] = useState([]); // Almacenamos los detalles de los productos
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    // ID del carrito (puedes cambiar este id para simular diferentes carritos)
    const cartId = 5;

    // Obtener los productos del carrito
    axios
      .get(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => {
        setCart(response.data);
        // Para obtener los detalles de los productos, hacemos solicitudes separadas
        const productRequests = response.data.products.map((product) =>
          axios.get(`https://fakestoreapi.com/products/${product.productId}`)
        );

        // Una vez que se obtienen todos los detalles de los productos, los guardamos en el estado
        Promise.all(productRequests)
          .then((responses) => {
            setProducts(responses.map((res) => res.data));
          })
          .catch((error) => {
            setError("Error fetching product details");
            console.error(error);
          });
      })
      .catch((error) => {
        setError("Error fetching cart data");
        console.error(error);
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!cart || products.length === 0) {
    return <p>Loading cart...</p>;
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-products">
        {products.map((product) => (
          <div className="cart-product" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="cart-product-image"
            />
            <div className="cart-product-details">
              <h3>{product.title}</h3>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Description:</strong> {product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
