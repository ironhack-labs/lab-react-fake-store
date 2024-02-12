import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";


function App() {

    // Useful const

    const [products, setProducts] = useState(null); //initialize the state by null 
    const listURL = "https://fakestoreapi.com"; //store the url
  
    // To fetch the list of products, set up an effect with the `useEffect` hook:
  
    useEffect(() => {
      axios.get(`${listURL}/products`) //call the url + products
      .then(response => { 
        setProducts(response.data) //set the products with the promise's data
      })
      .catch((e) => {
        console.log(e); // error
      })
    },[]) // empty array
  

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;
