import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function CartPage() {
  //     const [cart, setCart]=useState(null);
  //     const [loading, setLoading]= useState (true);

  //     useEffect(() => {
  //         axios
  //           .get(`https://fakestoreapi.com/carts/5`)
  //           .then((response) => {
  //             setCart(response.data);
  //             setLoading(false);
  //           })
  //           .catch((error) => {
  //             console.error("Error fetching product:", error);
  //             setLoading(false);
  //           });
  //       }, []);
  //       const fetchProductDetails = async (productId) = {
  //         try {
  //             const response =await axios.get (`https://fakestoreapi.com/products/${productId}`);
  //             return response.data;
  //         } catch(error) {
  //             console.error("Error fetching product details:", error);
  //         }
  //       }
  //     if (loading) return <div>Loading...</div>;

  //   return (
  //     <div className='CartPage'>
  //         <h1>Your Cart</h1>
  //         {cart && cart.products.length >0 ? (
  //             <ul>
  //                 {cart.products.map((product)=> (
  //                     <CartItem key= {product.product.Id} productId= {product.productId} quantity={product.quantity} fetchProductDetails={fetchProductDetails}/>
  //                 ))}
  //             </ul>
  //         )}
  //     </div>
  //   )
  // }
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/5`) // Adjust cart endpoint if needed
      .then((response) => {
        setCart(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
        setLoading(false);
      });
  }, []);

  // Map cart items to individual product data
  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="CartPage">
      <h1>Your Cart</h1>
      {cart && cart.products.length > 0 ? (
        <ul>
          {cart.products.map((product) => (
            <CartItem
              key={product.productId}
              productId={product.productId}
              quantity={product.quantity}
              fetchProductDetails={fetchProductDetails}
            />
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

function CartItem({ productId, quantity, fetchProductDetails }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails(productId).then((data) => setProduct(data));
  }, [productId]);

  if (!product) return <div>Loading product details...</div>;

  return (
    <li>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: "100px" }} />
      <p>Quantity: {quantity}</p>
      <p>Price: ${product.price}</p>
      <p>Total: ${(product.price * quantity).toFixed(2)}</p>
    </li>
  );
}

export default CartPage;
