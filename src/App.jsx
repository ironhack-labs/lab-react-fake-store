//building a simple React application that displays a list of products
//and allows you to view the details of each product.
// using the Fake Store API to get the data that you will show in the app. This API provides endpoints that return
// fake data for an online store, such as a list of products, product details, and a shopping cart

//GET https://fakestoreapi.com/products -> returns a json response with lists of all products
//GET https://fakestoreapi.com/products/:id -> returns a JSON response with details of a specific product by ID

import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
          // iteration 02
          // we need this to route to each product, it was already pre-set
        />
      </Routes>
    </div>
  );
}

export default App;
