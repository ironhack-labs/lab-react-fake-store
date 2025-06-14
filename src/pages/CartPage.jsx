import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function CartPage() {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);


  useEffect(() => {
    listProducts();
  }, []);

  const listProducts = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {setProducts(response.data)})
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getCart();
  }, []);

  const getCart = () => {
    axios
      .get('https://fakestoreapi.com/carts/5')
      .then((response) => { 
        setcart(response.data.products);
        //console.log(cartProducts);
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="ProductListPage container">
      {(cart.length > 0) && cart.map((item) => {
        const product = products.find((product) => product.id === item.productId);
        return (
          <div className="flex-center card" key={product.id}>
          <Link to={"/product/details/" + product.id}>
            <img className="" src={product.image}></img>
            <span>{product.title}</span>
            <span>{product.category}</span>
            <span>{product.price}</span>
            <span>{product.description}</span>
          </Link>
        
        </div>
        )
      })}
    </div>
  );
}

export default CartPage;