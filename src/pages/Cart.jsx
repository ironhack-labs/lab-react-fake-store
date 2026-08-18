import axios from "axios";
import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState(null);
  const [isLoadingCart, setIsLoadingCart] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  const getCart = async () => {
    let randomCart = Math.floor(Math.random() * 4) + 1;
    setIsLoadingCart(true);
    try {
      let response = await axios.get(
        "https://fakestoreapi.com/carts/" + randomCart,
      );
      setCart(response.data);
      setIsLoadingCart(false);
    } catch (e) {
      console.log(e);
    }
  };

  const getProducts = async () => {
    setIsLoadingProducts(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setIsLoadingProducts(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCart();
    getProducts();
  }, []);

  if (isLoadingCart || isLoadingProducts) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="CartPage">
      <h1>Cart</h1>
      <div className="CartProductList">
        {cart.products.map((cartProduct) => {
          {
            let product = products.find(
              (productFromList) => productFromList.id === cartProduct.productId,
            );

            return (
              <div
                key={"product-" + cartProduct.productId}
                className="product-card"
              >
                <img src={product.image} alt="" />
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p>{product.category}</p>
                <div>
                  <p>
                    ${(product.price * cartProduct.quantity).toFixed(2)} 
                  </p>
                  <p>{"("} Unit price: ${product.price} {")"}</p>
                </div>
                <p>Quantity : {cartProduct.quantity}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
