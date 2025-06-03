import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "150px" }}
            />
            <Link to={`/product/details/${product.id}`}>
              <h3>{product.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
