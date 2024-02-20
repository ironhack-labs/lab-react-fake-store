import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CartPage() {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${params.id}`) //este para es el nombre que l e dimos en app
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  if (product === null) {
    return <h2>...buscando producto</h2>
  }

  return "Carrito"
}

export default CartPage;
