import { useState, useEffect } from "react";

const CartItem = ({ item }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${item.productId}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
      });
  }, []);

  const style = {
    background: "white",
    width: "20%",
    margin: "20px",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div
      className="CartContainer"
      style={{
        background: "white",
        margin: "5em",
        border: "1px solid lightgray",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "auto",
      }}
    >
      <div style={style}>
        <img
          style={{
            width: "5em",
            height: "auto",
            aspectRatio: "1 / 1",
            padding: "5px",
            objectFit: "cover",
          }}
          src={product.image}
          alt={product.title}
        />
      </div>
      <div style={style}>{product.title}</div>
      <div style={style}>{item.quantity}</div>
      <div style={style}>
        {"$" + (product.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
