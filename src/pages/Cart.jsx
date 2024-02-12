
import { Link } from 'react-router-dom';

function Cart({ cart }) {
  return (
    <div className="CartPage">
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} style={{ width: '100px' }} />
              <div>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}
      <Link to="/" className="btn-secondary">Back to Home</Link>
    </div>
  );
}

export default Cart;
