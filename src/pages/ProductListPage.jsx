import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // 1. guardamos la data en un estado.
  const [products, setProducts] = useState([]);

  // 2. usamos useEffect en modo componentDidMount, solo cuando el componente se crea
  useEffect(() => {
    // 3. hacemos la llamada a la api
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        //console.log(response)
        // 4. almacenamos la data en el estado que hemos creado previamente
        setProducts(response);
      })
      .catch((error)=> {
        console.log(error)
      })
  }, []);

  // 5. gestion de espera
  if (products === null) {
    const espera = "... esperando la data";
    return espera;
  }

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => {
        return (
          <Link to={`/product/details/${eachProduct.id}`} key={eachProduct.id}>
            <div className="card flex-center">
              <img
                src={eachProduct.image}
                alt={eachProduct.title}
                width="54px"
              />
              <p className="content content.shifted"> {eachProduct.title} </p>
              <p className="content content.shifted">
                {" "}
                {eachProduct.category}{" "}
              </p>
              <p className="content content.shifted"> {eachProduct.price} </p>
              <p className="content content.shifted">
                {" "}
                {eachProduct.description}{" "}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
