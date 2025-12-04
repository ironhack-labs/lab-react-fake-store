import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="ProductListPage" style={{ padding: "20px" }}>
      <h1 className="text-2xl mb-4">Listado de Productos</h1>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>

        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;

