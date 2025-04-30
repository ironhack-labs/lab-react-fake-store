import './App.css'
import Navbar from './components/Navbar'
import ProductListPage from './pages/ProductListPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
	const [product, setProduct] = useState({})
	return (
		<div className='App relative z-20 pt-20'>
			<Navbar />

			<Routes>
				<Route path='/' element={<ProductListPage />} />
				<Route
					path='/product/details/:productId'
					element={
						<ProductDetailsPage
							product={product}
							setProduct={setProduct}
						/>
					}
				/>
				<Route path='/cart' element={<CartPage product={product} />} />
			</Routes>
		</div>
	)
}

export default App
