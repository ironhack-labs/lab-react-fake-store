import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).

  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
    if (products === null) {
      return <div>...cargando</div>;
    }
  };

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h1>Lista de producto</h1>
      <ul>
        {products.map((eachProduct) => {
          return (
            <li key={eachProduct.id}>
              <Link to={`/product/details/${eachProduct.id}`}>
              <h2>{eachProduct.title}</h2>
              <img src={eachProduct.image} alt="producto" />
              <p>Precio: ${eachProduct.price}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductListPage;
