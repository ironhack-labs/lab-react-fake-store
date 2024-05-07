import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log("ERROR getting products", e);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products === null ? (
        <h2>Getting products ... </h2>
      ) : (
        <h2>We have {products.length} product</h2>
      )}

      {products?.map((productDetails, index) => {
        return (
          <div key={index} className="card">
            <Link to={`/product/details/${productDetails.id}`}>
              <div>
                <img src={productDetails.image} alt="product" />
                <h2>{productDetails.title}</h2>
                <p>{productDetails.category}</p>
                <p>{productDetails.price}</p>
                <p>{productDetails.description}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
