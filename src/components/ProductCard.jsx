import { Link } from "react-router-dom";

export default function ProductCard({ products }) {
  console.log(products);
  return products.length > 0 ? (
    products.map((product) => (
      <Link key={product.id} to={`/products/details/${product.id}`}>
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
        </div>
      </Link>
    ))
  ) : (
    <p>Loading products...</p>
  );
}
