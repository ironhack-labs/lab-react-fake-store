import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/details/${product.id}`}
        >
          <article>
            <img src={product.image} alt={product.title} width="100" />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;