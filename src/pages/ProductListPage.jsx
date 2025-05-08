import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <table className="ProductListPage">
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <Link to={`/product/details/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="image"
                />
              </Link>
            </td>
            <td>
              <Link to={`/product/details/${product.id}`}>{product.title}</Link>
            </td>
            <td>
              <Link to={`/product/details/${product.id}`}>
                {product.category}
              </Link>
            </td>
            <td>${product.price}</td>
            <td>
              {product.description.length > 50
                ? product.description.substring(0, 50) + "..."
                : product.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductListPage;
