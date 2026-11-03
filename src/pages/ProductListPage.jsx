import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/product/details/${product.id}`} className="listItem">
              <img src={product.image} alt="" width="100px" />
              <span>{product.title}</span>
              <span>{product.category}</span>
              <span>${product.price}</span>
              <span>{product.description}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
