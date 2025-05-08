import { useState, useEffect } from "react";
import axios from "axios";

function ProductListPage() {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);

  // Estado para manejar errores o el estado de carga
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto para hacer fetch de los productos cuando el componente se monta
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Realiza la solicitud a la Fake Store API
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Guarda los productos en el estado
        setLoading(faalse); // Cambia el estado de carga a falso
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("No se pudieron cargar los productos.");
        setLoading(false);
      }
    };

    fetchProducts(); // Llama a la función de fetch
  }, []); // [] asegura que solo se ejecute al montar el componente

  // Renderizado del componente
  return (
    <div className="ProductListPage">
      <h1>Product List</h1>

      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ width: "150px", height: "150px" }} />
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
