import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch(error => console.log (error))

  }, []);


  return (
    <div className="ProductListPage">
      {/* Render list of products here */
        <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "20px", border: "1px solid #ddd", padding: "15px" }}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h2>{product.title}</h2>
            <Link to={`/product/details/${product.id}`}>Ver detalles</Link>
            <p>{product.description}</p>
            <p><strong>Precio:</strong> ${product.price}</p>
          </li>
        ))}
      </ul>
      }
    </div>
  );
}

export default ProductListPage;
