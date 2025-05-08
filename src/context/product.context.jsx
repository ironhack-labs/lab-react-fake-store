import { createContext, useEffect, useState } from "react";
import { API_URL } from "../services/API_URL";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = () => {   
    axios.get(API_URL)
        .then((response) => {
            console.log("Products ===>", response.data)
            setProducts(response.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })
}

useEffect(() => {
    
    getProducts()

}, [])

  return (
    <ProductContext.Provider value={{ products, loading, getProducts }}>
        {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };