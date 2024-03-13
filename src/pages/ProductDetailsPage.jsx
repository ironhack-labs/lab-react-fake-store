import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProductDetailsPage = () => {
  const [oneProduct, setOneProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    console.log("updating phase");
    async function getOneProduct() {
      axios(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          console.log(response.data);
          setOneProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getOneProduct();
  }, [id]);

  if (!oneProduct) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      <h3>Name: {oneProduct.title}</h3>
      <h3>Price: {oneProduct.price}</h3>
      <h3>Description: {oneProduct.description}</h3>
      <h3>Category: {oneProduct.category}</h3>
    </div>
  );
};
