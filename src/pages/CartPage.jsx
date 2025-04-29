import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CartPage() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://fakestoreapi.com/carts/2')
      .then((response) => {
        setCart(response.data.products);
        console.log(response.data.products);
        return axios.get('https://fakestoreapi.com/products');
      })
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const cartProducts = cart.map((cartElement) => {
    return products.find((productsElement) => {
      return productsElement.id === cartElement.productId;
    });
  });
  console.log(cartProducts);
  return (
    <div className="CardPage">
      {cartProducts.map((elm) => {
        return (
          <div className="card-wide" key={elm.id}>
            <Link to={`/product/details/${elm.id}`} products={products}>
              <h1>{elm.title}</h1>
              <div className="cart-container">
                {elm.image && <img src={elm.image} />}
                <div className="details-text-container">
                  <p>{elm.description}</p>
                  <p>{elm.category}</p>
                  <p>${elm.price}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;
