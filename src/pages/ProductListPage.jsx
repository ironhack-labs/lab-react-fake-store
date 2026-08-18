import axios from "axios";
import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoarding] = useState(true);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() =>{
    getProduct()
  }, [])

  const getProduct = async () => {
    setIsLoarding(true)
    try{
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setIsLoarding(false);
    }catch(e) {
      console.log(e);
    }
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (<CardProduct key={product.id} product={product} />)
      })}
    </div>
  );
}

export default ProductListPage;
