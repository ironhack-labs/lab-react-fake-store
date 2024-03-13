// import { useEffect, useState } from "react";
// import axios from "axios"

// function CartPage() {
//     const [fproduct, setFproduct] = useState({})

//     useEffect(() => {
//         const getCartProducts = async () => {
//           try {
//             const response = await axios.get(`https://fakestoreapi.com/carts/`)
//             setFproduct(response.data)
//           } catch(err) {
//             console.log(err)
//           }
//         } 
//         getCartProducts
//     }, [])

//     return (

//         <div className="CartProd">

//             {fproduct && fproduct.map ((oneFProduct) => {


//             })}

//         </div>
//     )

// }

// export default CartPage