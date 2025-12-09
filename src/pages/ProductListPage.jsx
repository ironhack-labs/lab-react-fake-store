import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // ← Agregamos esto

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <div key={product.id}>
          {/* Todo el bloque del producto envuelto en un Link */}
          <Link 
            to={`/product/details/${product.id}`} 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2>{product.title}</h2>
            <p>Precio: ${product.price}</p>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px" }}
            />
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;