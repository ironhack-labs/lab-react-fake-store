import { useEffect, useState } from "react";

function CartPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/5")
      .then(res => res.json())
      .then(cart => {
        const productIds = cart.products.map(p => p.productId);

        return Promise.all(
          productIds.map(id =>
            fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
          )
        );
      })
      .then(data => setProducts(data))
      .catch(err => {
        console.error("Error loading cart:", err);
      });
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>
      {products.length === 0 ? (
        <p>Loading or empty cart...</p>
      ) : (
        products.map(product => (
          <div key={product.id} style={{ marginBottom: "20px" }}>
            <p>{product.title}</p>
            <img src={product.image} alt={product.title} width={100} />
            <p>€{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;
