import { useState, useEffect } from "react";
import{Link} from "react-router-dom";
import "./productListPage.css"
function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setProducts(result);
      console.log(response);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="productList">
      <h1>Lista de Productos</h1>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (

        <ul className="ul-list">
          {products.map((product) => (

            <li key={product.id}> <Link to={`/product/details/${product.id}`}>
              <p>{product.title}</p>
              <p>Precio: ${product.price}</p>
              <img src={product.image} alt={product.title} style={{ width: "100px" }}/>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductListPage;
