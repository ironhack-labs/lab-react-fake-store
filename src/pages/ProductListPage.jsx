import { Link } from "react-router-dom";

function ProductListPage({ products }) {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div className="ProductCard">
            <img src={product.image} />
            <h2 className="productTitle">{product.title}</h2>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
