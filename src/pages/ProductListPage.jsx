import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((productObj) => (
        <div key={productObj.id} className="product">
          <img src={productObj.image} />
          <p>{productObj.title}</p>
          <p>${productObj.price}</p>
          <Link to={`/product/details/${productObj.id}`}>More Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
