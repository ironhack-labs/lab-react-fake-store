import axios from "axios";
import { useEffect, useState } from "react";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  console.log(products);

  return (
    <div className="ProductListPage">
      {products.map((productObj) => (
        <div key={productObj.id} className="product">
          <img src={productObj.image} />
          <p>{productObj.title}</p>
          <p>${productObj.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
