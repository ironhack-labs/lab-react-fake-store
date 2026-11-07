import { useState, useEffect } from "react";
import {Link} from "react-router-dom";


function ProductListPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch ("https://fakestoreapi.com/products")
    .then (response => response.json())
    .then (data => {
      setProducts(data);
    });

  }, [])

  return (
    <div className="ProductListPage">
      {products.map(product => (
        <div key={product.id}>
        <Link>
        <h2>{product.title}</h2>
          <p>€{product.price}</p>
          <img src={product.image}/>
        </Link>
        </div>
      ))}
    </div>
  );
}
export default ProductListPage;
