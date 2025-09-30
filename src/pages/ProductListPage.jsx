import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data } = await axios("https://fakestoreapi.com/products");
        console.log(data);
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Products List</h1>
      <ul className="container">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              to={`/product/details/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h1 className="item-name">{product.title}</h1>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <div id="item-info">
                <p>${product.price}</p>
                <p>{product.category}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
