import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        return setProducts(data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (products === null) {
    return <h3>... buscando productos</h3>;
  }

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage">
      {products.map((cadaProducto) => {
        return (
          <Link
            to={`/product/details/${cadaProducto.id}`}
            key={cadaProducto.id}
          >
            <div className="contendor-principal">
              <img src={cadaProducto.image} alt="" />
              <p className="mediano">{cadaProducto.title}</p>
              <p className="chico">{cadaProducto.category}</p>
              <p className="chico">{cadaProducto.price}</p>
              <p className="grande">{cadaProducto.description}</p>



            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
