import { Routes, Route } from "react-router-dom"
import ProductDetailsPage from "../pages/ProductDetailsPage"
import ProductListPage from "../pages/ProductListPage"


const App_routes = () => {

    return (
        <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
        </Routes>
    )

}
export default App_routes