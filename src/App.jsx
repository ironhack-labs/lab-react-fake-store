import './App.css'
import {Routes, Route} from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage'
import HomePage from './components/ProductListComponent'

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/product/details/:productId' element={<ProductDetailsPage/>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
