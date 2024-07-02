import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CartPage = () => {

    const [products, setProducts] = useState([])
    const [productDetails, setProductDetails] = useState([])

    useEffect(() => {
      const fetchCart = async() => {
        try {
          const response = await axios.get(`https://fakestoreapi.com/carts/5`);
          
          if (response.status !== 200) {
            throw new Error("Server response not ok");
          }

          const data = response.data;
          console.log("Cart data: ", data);
    
          setProducts(data.products);

        } catch (error) {
          console.log("Error: ", error);
        }
      }

      fetchCart()
      
    }, []);


      useEffect(() => {

        const fetchDetails = async() => {
          try {
            const productsArr = products.map(product => (
              axios.get(`https://fakestoreapi.com/products/${product.productId}`)
            ));

            const responses = await Promise.all(productsArr);

            responses.forEach(response => {
              if (response.status !== 200) {
                throw new Error("Server response not ok");
              }
            });

            const data = responses.map(response => response.data);

            console.log("product data: ", data);

            setProductDetails(data)

          } catch (error) {
            console.log("error: ", error)
          }
        }

        if (products.length) {
          fetchDetails();
        }
      }, [products] )



    return (
        <div className="cartPage">
            <h1>Shopping cart</h1>
            <ul>
                {productDetails.map(product => (
                <Link to={`/product/details/${product.id}`} key={product.id}>
                    <li className="listItem card flex-center">
                    <img src={product.image} className="productImg"/>
                    <p className="productTitle">{product.title}</p>
                    <p>{product.category}</p>
                    <p>€{product.price}</p>
                    <p className="productDescription">{product.description}</p>
                    </li>
                </Link>
                ))}
            </ul>
        </div>
    )
}

export default CartPage;