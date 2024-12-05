import { useState, useEffect } from "react";
import axios from "axios";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartId = 5;
        const response = await axios.get(`https://fakestoreapi.com/carts/${cartId}`);
        setCartItems(response.data.products);
      } catch (error) {
        setError("Error al cargar el carrito.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productRequests = cartItems.map(item =>
          axios.get(`https://fakestoreapi.com/products/${item.productId}`)
        );
        console.log(cartItems);
        const productResponses = await Promise.all(productRequests);
        setProducts(productResponses.map(response => response.data));
      } catch (error) {
        setError("Error al cargar los detalles de los productos.");
      }
    };

    if (cartItems.length > 0) {
      fetchProductDetails();
    }
  }, [cartItems]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="CartPage">
      <h1 className="text-center my-4">Carrito de Compras</h1>
      <div className="container">
        <div className="row">
          {products.length > 0 ? (
            products.map(product => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={product.image} alt={product.title} className="card-img-top img-fluid" />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><strong>Precio: ${product.price}</strong></p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;