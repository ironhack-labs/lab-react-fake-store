import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log("Error cargando productos:", error);
      });
  }, []);


  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>

            <Link to={`/product/details/${product.id}`}>
              ver detalles
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
