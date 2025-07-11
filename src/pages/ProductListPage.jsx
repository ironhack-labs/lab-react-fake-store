import { useState } from "react";
import ProductListPageComponent from "../components/ProductListPage";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      <ProductListPageComponent />
    </div>
  );
}

export default ProductListPage;
