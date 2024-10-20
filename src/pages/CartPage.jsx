import React from 'react';

const CartPage = ({ cart }) => {
  const getTotal = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <div className="spacing-lg">
      <h1 className="text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="card spacing-md">
              <img src={product.image} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p>{product.price} USD</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total: {(product.price * product.quantity).toFixed(2)} USD</p>
            </div>
          ))}
          <h3>Total Price: {getTotal()} USD</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
