import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1>All Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map((product) => (
          <Link key={product.id} to={`/product/details/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                width: '100%',
                padding: '16px',
                margin: '20px',
                textAlign: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                fontFamily: 'sans-serif'
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ 
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',
                  borderRadius: '4px' 
                }}
              />
              <h4 style={{ fontSize: '16px', margin: '12px 0' }}>{product.title}</h4>
              <p style={{ fontSize: '14px', color: '#666' }}>${product.price}</p>
              <p style={{ fontSize: '14px', color: '#666' }}>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
