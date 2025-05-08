import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


function CartPage() {
    //store cart items
    const [cart, setCart] = useState([]);
    // Extract cartId from Url
    const { id } = useParams();

    useEffect(() => {
        
        axios.get(`https://fakestoreapi.com/carts/5`)
            .then((response) => {

                //get products from cart
                const cartItems = response.data.products;

                //get details of each product
                const productDetails = cartItems.map(itemObj =>
                    axios.get(`https://fakestoreapi.com/products/${itemObj.productId}`)
                );
                //wait for all Promises
                return Promise.all(productDetails)
                    .then((responseArr) => {
                        const ProductInfo = responseArr.map((elm, index) => ({
                            //spread operator for cart data
                            ...elm.data,
                            //Add quantity from cart
                            quantity: cartItems[index].quantity,
                        }));
                        setCart(ProductInfo);
                    });

            })
            //to handle error
            .catch(e => console.log('Error', e))
    }, [id]);
    //to display 'Loading',if page is still loading
    if (cart === null) {
        return <h2> Loading...</h2>
    }




    return (

        <>

            <div>
                <h1> <b> Your Shopping Cart  </b></h1>
              

                        
                          {  cart.map((cartObj) => {
                                return (
                                    <div key={cartObj.id} className="cartItem">
                                        <img src={cartObj.image} alt={cartObj.title} />
                                        <p><b>{cartObj.title}</b></p>
                                        <p><b>Price:</b> ${cartObj.price}</p>
                                        <p><b>Quantity:</b> {cartObj.quantity}</p>
                            
                                    </div>

                                )})
                                }
                                
                           <Link to="/" className="mainPage"> <button> Back </button> </Link> 

            </div>

        </>

    );
}
export default CartPage;