import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function ProductListPage() {
   
  // con products almacenamos la lista de productos y setProducts es una función
  // para actualizar el estado de products.
  const [products, setProducts] = useState([]);

  // fetch hace una solicitud a la API para obetener la lista de productos
  // si ocurre algun error el catch lo muestra en consola
  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

// el argumento [] hace que el efecto solo se ejecute una vez
  useEffect(() => {
    fetchData();
  }, []);

// recorremos la lista de productos con map
// lo mostramos con product.title
  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/details/${product.id}`}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p><strong>Price:</strong> ${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
