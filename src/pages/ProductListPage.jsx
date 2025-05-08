import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import axios from "axios";


function ProductListPage() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    fetch("https://fakestoreapi.com/products/:id")
    .then(response => response.json)
    .then(data => setProducts(data.message))
  },[])

  axios.get("https://fakestoreapi.com/products")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })

  axios.get("https://fakestoreapi.com/products/:id")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })

  return (
    <div className="ProductListPage">
      {products}
    </div>
  );
}

export default ProductListPage;
