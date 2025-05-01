import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Products:", data);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="card mb-2">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src={product.image}
                    className="img-fluid rounded-start"
                    alt={product.name}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h3 className="card-title fw-bold">{product.title}</h3>
                    <h5 className="card-title">{product.category}</h5>
                    <h5 className="card-title fw-bold">{product.price}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductListPage;