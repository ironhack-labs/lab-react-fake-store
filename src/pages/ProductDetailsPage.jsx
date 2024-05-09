import { useState, useEffect } from "react";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    return (
      <div className="ProductDetailsPage">
        <ul>
          {product.map((product) => (
            <li key={product.id}>
              <Link to={product.id}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  
  }, [product.id] ); 
}

export default ProductDetailsPage;
