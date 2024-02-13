import { useState } from "react";
import ProductList from "../components/ProductList";
import { ChakraProvider } from "@chakra-ui/react";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return <div className="ProductListPage">{<ProductList />}</div>;
}

export default ProductListPage;
