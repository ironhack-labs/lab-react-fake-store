import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    //Le decimos a React que queremos ejecutar un efecto después del renderizado.
    fetch("https://fakestoreapi.com/products") //Hacemos una petición HTTP a Fake Store API.
      .then((response) => {
        //Cuando llega la respuesta HTTP, leemos su contenido y lo convertimos de JSON a datos de JavaScript.
        return response.json();
      })
      .then((data) => {
        //Cuando termina la conversión, recibimos los productos en la variable data.
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <div key={product.id}>
          <h2>
            <Link to={`/product/details/${product.id}`}>{product.title}</Link>
          </h2>
          <img src={product.image} alt={product.title} width="150" />
          <p>{product.price} €</p>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
