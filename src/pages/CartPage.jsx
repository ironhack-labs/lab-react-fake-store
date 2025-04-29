import '../CartPage.css'

function CartPage({ cartItems, setCartItems }) {
    const handleRemoveItem = (id) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };
  
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div className="CartPage">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <p>${item.price}</p>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
          </div>
        )}
      </div>
    );
  }
  
  export default CartPage;