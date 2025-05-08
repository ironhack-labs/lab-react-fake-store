import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      throw new Error(`Response error ${error.status}`);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="productListPage">
      {products.map((currentProduct) => {
        return (
          <Link
            to={`/product/details/${currentProduct.id}`}
            key={currentProduct.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
              backgroundColor: "#fff",
              gap: "20px",
              fontWeight: "bold",
            }}
          >
            <img
              src={currentProduct.image}
              alt=""
              style={{
                height: "200px",
                width: "120px",
                flex: 1,
                border: "1px solid #d4d3d5",
                padding: "10px",
              }}
            />
            <p style={{ flex: 1 }}>{currentProduct.title}</p>
            <p style={{ flex: 1 }}>{currentProduct.category}</p>
            <p style={{ flex: 1 }}>${currentProduct.price}</p>
            <p style={{ flex: 2, fontSize: "0.9em" }}>
              {currentProduct.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
