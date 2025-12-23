import { useEffect, useState } from "react";
import * as StoreService from '../services/store-service';
import ProductItem from "../components/products/product-item/product-item";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect (() => {
    async function fetchStoreItems() {
      const storeItems = await StoreService.getStoreProducts();
      setProducts(storeItems);
    }
    fetchStoreItems()
  }, [])


  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <div key={product.id}>
          <ProductItem {...product} isList={true} isDetail={false}></ProductItem>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
