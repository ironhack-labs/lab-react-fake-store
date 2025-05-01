import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!products.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/details/${product.id}`}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="100" />
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
