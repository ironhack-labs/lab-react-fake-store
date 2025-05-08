import axios from "axios";
import { useEffect } from "react";

export default function CardPage() {
  const getData = async () => {
    try {
      const res = await axios.get(
        // `https://fakestoreapi.com/products/${productId}`
      );
      // setProduct(res.data)
      console.log(res);
    } catch (error) {
      throw new Error(`Response error ${error.status}`);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>Card Page</div>;
}
