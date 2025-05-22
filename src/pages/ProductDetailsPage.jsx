import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  // Get the productId from the URL parameters using useParams hook
  const { productId } = useParams();

  // State to store the product details
  const [product, setProduct] = useState(null);

  // Fetch product details when the component mounts or when productId changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch single product data from the API using productId
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data); // Set the fetched product data to state
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  // Function to handle adding product to cart (example: just alert for now)
  const handleAddToCart = () => {
    alert(`Product "${product.title}" added to cart!`);
    // TODO: Add product to cart logic here (context, redux, or local state)
  };

  // Show loading message while product data is not yet fetched
  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="ProductDetailsPage card">
      {/* Product image */}
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      
      {/* Product title */}
      <h2>{product.title}</h2>
      
      {/* Product category */}
      <p>{product.category}</p>
      
      {/* Product price */}
      <p>${product.price}</p>
      
      {/* Product description */}
      <p>{product.description}</p>

      {/* Add to Cart button */}
      <button onClick={handleAddToCart} className="btn-primary">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetailsPage;
