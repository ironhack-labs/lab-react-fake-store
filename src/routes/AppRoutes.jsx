import { Route, Routes } from "react-router-dom"
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"
import HomePage from "../pages/HomePage/HomePage"

const AppRoutes = () => {

    return (
        <div className="AppRoutes">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes