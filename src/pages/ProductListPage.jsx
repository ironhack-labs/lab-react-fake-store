import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

function ProductListPage() {

  const BASE_URL = "https://fakestoreapi.com"

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className="ProductListPage">
      {products.map((productObj) => (
        <div className="product-row" key={productObj.id}>
          <img src={productObj.image} alt={productObj.title} />
          <div className="product-title">{productObj.title}</div>
          <div className="product-category">{productObj.category}</div>
          <div className="product-price">{productObj.price} $</div>
          <div className="product-description">{productObj.description}</div>

          <Link to={`/product/details/${productObj.id}`}>
            <button>More Detail</button></Link>
        </div>
      ))}
    </div>
  );
}
export default ProductListPage;
