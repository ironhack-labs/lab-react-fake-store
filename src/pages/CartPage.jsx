import { useState, useEffect } from "react";
import axios from "axios";

export const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    async function getCart() {
      try {
        const { data } = await axios("https://fakestoreapi.com/carts/5");
          console.log(data);
          const arrayOfProduct = [];
          for(let i=0; i<data.products.length; i++){
            const theProductId = data.products[i].productId;
            const theProduct = await axios(`https://fakestoreapi.com/products/${theProductId}`);
            theProduct.data.quant = data.products[i].quantity;
            console.log("One prooduct : ", theProduct);
            arrayOfProduct.push(theProduct.data);
          }
        setCartProducts(arrayOfProduct);
        let total = 0;
        arrayOfProduct.forEach(prod=>{
          const sub = prod.price * prod.quant;
          total += sub;
        })
        setTotal(total);
      } catch (error) {
        console.log(error);
      }
    }
    getCart();
  }, []);

  return (
    <>
      {cartProducts?.map(product => (
            <div key={`productInCart_${product.id}`}>
                <img src={product.image} alt={product.title} className="card-image" />
                <p>{product.name}</p>
                <p>{product.quantity}</p>
                <p>{product.price}</p>
                <p>Sub-total: ${product.quant * product.price}</p>
            </div>
        ))}
        <h2>Total: {total}</h2>
    </>
  );
};
