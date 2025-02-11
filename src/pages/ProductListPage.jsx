import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URLPro = "https://fakestoreapi.com/products";
function ProductListPage() {
  const [fetching, setFetching] = useState(true);

  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios
      .get(URLPro)
      .then((response) => {
        setProducts(response.data); // Actualiza el estado con los datos de la respuesta
        setFetching(false); // Cambia el estado de fetching a false
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setFetching(false); // Cambia el estado de fetching a false en caso de error
      });
  }, []);

  if (fetching) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="ProductListPage">
      {products.map((prod) => {
        return (
          <div key={prod.id} >
            <Link to={`product/details/${prod.id}` }className="card">
              {" "}
              {/*prod.id para asegurar unicidad */}
              <img src={prod.image} alt={prod.title} /> {/* prod.image */}
              <h3>{prod.title}</h3>
              <p> ${prod.category}</p>
              <p> ${prod.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
