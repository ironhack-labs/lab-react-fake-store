import { Routes, Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage/ProductListPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"
import HomePage from "../pages/HomePage/HomePage";

const AppRoutes = () => {
    return (
        <div className="AppRoutes"></div>,
        <Routes>,
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:productsId" element={<ProductDetailsPage />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />,
        </Routes>

    )
}

export default AppRoutes