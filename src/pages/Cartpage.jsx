import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CartPage() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/5")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  useEffect(() => {
    if (!cart) return;
    Promise.all(
      cart.products.map((item) =>
        fetch(`https://fakestoreapi.com/products/${item.productId}`).then((r) => r.json())
      )
    ).then((fetchedProducts) => {
      const withQty = fetchedProducts.map((p) => {
        const cartItem = cart.products.find((c) => c.productId === p.id);
        return { ...p, quantity: cartItem.quantity };
      });
      setProducts(withQty);
    });
  }, [cart]);

  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="CartPage container mx-auto px-4 py-8 max-w-2xl">
      <h1>Your Cart</h1>
      {products.length === 0 ? (
        <p className="text-gray-500">Loading cart...</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
                <img src={product.image} alt={product.title} className="h-16 w-16 object-contain" />
                <div className="flex-1">
                  <p className="font-semibold text-sm line-clamp-1">{product.title}</p>
                  <p className="text-gray-500 text-sm">Qty: {product.quantity}</p>
                </div>
                <p className="font-bold text-blue-700">${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
      <div className="mt-6">
        <Link to="/">
          <button className="btn-secondary">← Back to Products</button>
        </Link>
      </div>
    </div>
  );
}

export default CartPage;