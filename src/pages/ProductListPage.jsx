import { useEffect, useState } from "react";
import * as FakeStoreApi from "../services/api-service";
import PageLayout from "../components/layouts/page-layout/page-layout";
import ProductList from "../components/Products/product-list/product-list";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    FakeStoreApi.listProducts()
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <PageLayout>
      <ProductList productList={products}/> 
    </PageLayout>
  );
}

export default ProductListPage;
