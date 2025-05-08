import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProductDetailsPage from "../pages/ProductDetailsPage"

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
                <Route path="*" element={<h1>cuatro sero cautor</h1>} />
            </Routes>
        </div>
    )
}

export default AppRoutes