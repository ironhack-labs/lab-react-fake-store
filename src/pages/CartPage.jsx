import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CartPage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/carts/1")
        .then((response) => {
    
          if (response.status !== 200) {
            throw new Error("Server response not ok");
          }
    
          const data = response.data;
          console.log(data);
    
          setProducts(data.products);
    
        })
        .catch((error) => {
          console.log("error: ", error);
        });
      }, []);


      useEffect(() => {
        const productsArr = products.map(product => {
            axios.get(`https://fakestoreapi.com/products/${product.productId}`)
        });
        
        Promise.all(productsArr).then((response) => {
            
        })
        

      }, [products] )

    return (
        <div className="cartPage">
            <h1>Shopping cart</h1>
            <ul>
                {products.map(product => (
                <Link to={`/product/details/${product.productId}`} key={product.productId}>
                    <li className="listItem card flex-center">
                        product
                    </li>
                </Link>
                ))}
            </ul>
        </div>
    )
}

export default CartPage;