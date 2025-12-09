import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log("ERROR fetching products:", err));
  }, []);

  return (
    <div className="ProductListPage container">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      {products.map((prodObj) => (
        <Link
          to={`/product/details/${prodObj.id}`}
          key={prodObj.id}
          className="product-row hover:shadow-lg transition-shadow duration-200"
        >
          <img src={prodObj.image} alt={prodObj.title} />

          <div>
            <p className="product-title">{prodObj.title}</p>
            <p className="product-category">{prodObj.category}</p>
          </div>

          <p className="product-price">{prodObj.price} €</p>

          <p className="product-description">{prodObj.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;