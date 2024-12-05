import { useState, useEffect } from "react"; 
import axios from "axios"; 

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartId = 5; // Cambia esto al ID del carrito que desees usar
        const response = await axios.get(`https://fakestoreapi.com/carts/${cartId}`);
        setCartItems(response.data.products); 
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []); 

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productRequests = cartItems.map(item =>
          axios.get(`https://fakestoreapi.com/products/${item.id}`)
        );
        const productResponses = await Promise.all(productRequests);
        setProducts(productResponses.map(response => response.data)); 
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (cartItems.length > 0) {
      fetchProductDetails(); 
    }
  }, [cartItems]); 

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