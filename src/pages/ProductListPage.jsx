import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="product-card">
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "50px" }}
              />
              <p>{product.title}</p>
              <p>{product.price} €</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;