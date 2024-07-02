import { useState, useEffect } from "react";

function Cart() {
  const [thisCart, setThisCart] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const fetchCartProducts = async (thisCart) => {
    try {
        const tempProducts = []
      for (const product of thisCart.products) {
        const response = await fetch(
          `https://fakestoreapi.com/products/${product.productId}`
        );
        if (response.ok) {
          const parsedProducts = await response.json();
          tempProducts.push(parsedProducts)
          
        }
      }
      setCartProducts(tempProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts/5");
      if (response.ok) {
        const parsed = await response.json();
        setThisCart(parsed); 
        fetchCartProducts(parsed)     }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);


  const getQuantity = (id) => {
    const filteredArr = thisCart.products.filter(
      (eachProduct) => id === eachProduct.productId
    );
    return filteredArr[0].quantity;
  };

  return (
    <div className="cart">
      <h1>Your cart</h1>
      <p>User id: {thisCart.userId}</p>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((eachProduct) => {
            return (
              <tr key={eachProduct.id}>
                <td>
                  <img
                    className="cardImage"
                    src={eachProduct.image}
                    alt={eachProduct.title}
                  />
                </td>
                <td>{eachProduct.title}</td>
                <td>{getQuantity(eachProduct.id)}</td>
                <td>{eachProduct.price}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              {cartProducts.reduce((acc, eachProduct) => {
                return acc + eachProduct.price;
              }, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
