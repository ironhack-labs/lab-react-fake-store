import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const handleFetch = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);

  const renderProducts = () => {
    const renderedProducts = products.map((product) => {
      return (
        <div key={product.id}>
          <Link to={`/product/details/${product.id}`}>
            <div className="card">
              <div className="content product-image">
                <img src={product.image} alt="product image" />
              </div>
              <div className="content product-name">{product.title}</div>
              <div className="content product-category">{product.category}</div>
              <div className="content product-price">{product.price} €</div>
              <div className="content product-description">
                {product.description}
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return renderedProducts;
  };

  return <div className="ProductListPage">{renderProducts()}</div>;
}

export default ProductListPage;
