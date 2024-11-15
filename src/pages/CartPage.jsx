import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CartPage({ products }) {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [productShoppingList, setProductsShoppingList] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);
  const { cartID } = useParams();

  useEffect(() => {
    async function getCart() {
      const response = await fetch(`https://fakestoreapi.com/carts/${cartID}`);
      const data = await response.json();

      let productShoppingList = products.filter((product) => {
        return (
          data.products.findIndex((sp) => sp.productId === product.id) >= 0
        );
      });
      setProductsShoppingList([...productShoppingList]);
      let total = productShoppingList.reduce((a, c) => a + c.price, 0);
      setCartTotal(total);
      console.log(data);
    }
    getCart();
  }, []);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <>
      <div className="ProductShoppingListPage">
        {/* Render list of products here */}
        {productShoppingList.map((product) => {
          return (
            <Link to={`/product/details/${product.id}`} key={product.id}>
              <div className="product-shopping-item">
                <img
                  src={product.image}
                  alt="Product Image"
                  className="product-shopping-list-image"
                />
                <h2 className="product-shopping-list-title">{product.title}</h2>{" "}
                <span>${product.price}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="product-shopping-total">
        <h2>Total</h2> <h4>${cartTotal}</h4>
      </div>
      <Link to="/">
        <div className="check-out-button ">
          <button className="btn-primary">Check Out</button>
        </div>
      </Link>
    </>
  );
}

export default CartPage;
