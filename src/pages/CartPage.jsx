import { useEffect, useState } from "react"
import axios from "axios"

export default function Cart () {
    
    const [cart, setCart] = useState({});
    const [cartItems, setCartItems] = useState([])
    const {products} = cart;
    

    const getItemDetails = (productId) => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => {
            setCartItems(prev => {
                const alreadyExists = prev.some(item => item.id === res.data.id);
                if (alreadyExists) return prev;
                return [...prev, res.data];
            });
            
        }).catch((err) => console.log(error))
    };

    useEffect(() => {
      if(products && products.length > 0) {
        products.forEach((product) => {
            getItemDetails(product.productId)
        })
      }
    }, [products])


    console.log("prods", products)

    const getCart = () => {
        axios.get("https://fakestoreapi.com/carts/1")
        .then((res) => {
            console.log("setting shopping cart");
            setCart(res.data);
        }).catch((err) => console.log(error))
    }



    useEffect(() => {
        getCart()
    }, [])
 
    console.log("cartItems", products)

    return (
        <>
        <h1>Shopping cart</h1>
        {cartItems.map((item) => {
            return (
                <>
                <div className="product-container" key={item.id}>
                <img
                  className="product-img"
                  src={item.image}
                  alt={item.title}
                />
                <p className="product-title">{item.title}</p>
                <p className="product-cat">{item.category}</p>
                <p className="product-price">{item.price}</p>
                <p className="product-description multi-line-clip">
                  {item.description}
                </p>
              </div>
                </>
            )
        })}
        </>
    )
}