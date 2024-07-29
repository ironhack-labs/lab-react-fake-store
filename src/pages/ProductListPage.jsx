import { useEffect, useState } from "react";
import axios from "axios";

const ProductListPage = () => {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios
      .get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data)

      })



  }, []);




  return (
    <div className="ProductListPage">

      {products}
    </div>
  );
}

export default ProductListPage;
