import { Routes, Route } from "react-router-dom"

import ProductListPage from "../pages/ProductListPage/ProductListPage"
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path="/" element={<ProductListPage />} />
                <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes