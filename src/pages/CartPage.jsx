import React, { useEffect, useState } from 'react'

const CartPage = ({ product }) => {
	const [cartProd, setCartProd] = useState([])

	useEffect(() => {
		async function cartResponseFunc() {
			try {
				if (product.id < 8) {
					let cartResonse = await fetch(
						`https://fakestoreapi.com/carts/${product.id}`
					)
					let dataResponse = await cartResonse.json()
					let prodArr = dataResponse.products
					let prodIdArrQuant = []
					let prodUrl = []
					prodArr.forEach((prod) => {
						prodUrl.push(
							`https://fakestoreapi.com/products/${prod.productId}`
						)
						prodIdArrQuant.push(prod.quantity)
					})
					let promises = await Promise.all(
						prodUrl.map(async (prodUrl) => {
							let resp = await fetch(prodUrl)
							let dataRes = await resp.json()
							return dataRes
						})
					)

					console.log(promises)

					let cartProdTotal = promises.map((item, i) => {
						return { ...item, quantity: prodIdArrQuant[i] }
					})
					setCartProd(cartProdTotal)

					// let dataPromRes = promises.json()
					// let prodfinalArr = await Promise.all(
					// 	dataPromRes.map((p) => p.json())
					// )
				} else {
					throw new Error(`Cart id cant be bigger than id 7`)
				}
			} catch (error) {
				console.log(error)
			}
		}
		cartResponseFunc()
	}, [])

	return (
		<div>
			{cartProd.map((pro) => {
				return (
					<div className='card'>
						<img className='card-image' src={pro.image} alt='' />
						<div>
							<p>{pro.title}</p>
						</div>
						<div>
							<p>{`$${pro.price} x ${pro.quantity} = $${
								pro.quantity * pro.price
							}`}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default CartPage
