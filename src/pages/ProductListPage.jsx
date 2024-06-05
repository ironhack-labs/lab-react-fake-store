import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log("products data", data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((oneProduct) => 
        <Link to={`/product/details/${oneProduct.id}`} key={oneProduct.id}>
          <div>
            <img src={oneProduct.image} alt={oneProduct.title} style={{ height: "100px" }} />
            <h4>{oneProduct.title}</h4>
            <h5>{oneProduct.category}</h5>
            <h5>${oneProduct.price}</h5>
            <h5>{oneProduct.description}</h5>
          </div>
        </Link>
      )}
    </div>
  );
}

export default ProductListPage;
