import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/card';


function CartPage () {


  const [cart, setCart] = useState(null);

  const apiBaseUrl = `https://fakestoreapi.com`;


  useEffect(() => {

    axios
      .get(`${apiBaseUrl}/carts/1`)
      .then(result => setCart(result.data));

  },[])

	return (

		<>

		{cart?.products.map(item => {

			return(

				<Card key={item.id} id={item.id}>
					<p>Quantity: {item.quantity}</p>
				</Card>
			
			)

		})}

		</>

	)

}

export default CartPage;
