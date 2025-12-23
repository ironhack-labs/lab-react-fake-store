import { useEffect, useState } from "react";
import ProductItem from "../components/products/product-item/product-item";
import { useParams } from "react-router-dom";
import * as StoreService from '../services/store-service';


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect (() => {
    async function getStoreProductsById() {
      const storeItem = await StoreService.getStoreProductsByID(productId);
      setProduct(storeItem);
    }
    getStoreProductsById();
  }, [])

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div>
      <ProductItem {...product} isList={false} isDetail={true}></ProductItem>
    </div>
  );
}

export default ProductDetailsPage;
