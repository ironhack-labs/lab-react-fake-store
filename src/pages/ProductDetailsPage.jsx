import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams(); 
  const navigate = useNavigate();


  useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
          setLoading(false);
        });
    }, []);
 
  if (!product) return <p>Loading...</p>;

  return (
    <div className="ProductDetailsPage" style={{ maxWidth: '700px', margin: '0 auto', padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ height: '250px', objectFit: 'contain' }}
        />
        <div>
          <span style={{
            display: 'inline-block',
            padding: '4px 8px',
            backgroundColor: '#4b2ff2',
            color: 'white',
            borderRadius: '6px',
            fontSize: '12px',
            marginBottom: '8px'
          }}>
            {product.category}
          </span>

          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>{product.title}</h2>
          <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px' }}>{product.description}</p>
          <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#4b2ff2' }}>${product.price}</p>
        </div>
      </div>

      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
