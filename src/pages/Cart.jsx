import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios("https://fakestoreapi.com/carts/5");
        const products = response.data.products;
        const array = [];
        for (let i = 0; i < products.length; i++) {
          console.log(products[i]);
          axios(`https://fakestoreapi.com/products/${products[i].productId}`)
            .then((theActualProductData) => {
              array.push(theActualProductData.data);
            })
            .catch((err) => console.log(err));
        }
        setCart(array);
        console.log(array);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, []);

  return (
    <div>
      {cart.map((oneProduct) => {
        return (
          <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
            <div className="product-card">
              <img
                src={oneProduct.image}
                alt={oneProduct.title}
                style={{ height: "100px" }}
              />
              <h4>{oneProduct.title}</h4>
              <h4>{oneProduct.category}</h4>
              <h4>${oneProduct.price}</h4>
              <h4>{oneProduct.description}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
