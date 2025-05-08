import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";
import axios from "axios";
const URL = "https://fakestoreapi.com/products";
function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!products) {
    return <p>no product available</p>;
  }
  return (
    <div className="ProductListPage">
      {products.map((elem) => {
        return (
          <li key={elem.id} style={{ display: "flex" }}>
            <img className="imgproduct" src={elem.image} alt="" />
            <div className="productdetails">
              <p className="title">
                <Link to={`/product/details/${elem.id}`}> {elem.title}</Link>
              </p>
              <p style={{ fontStyle: "italic" }}>{elem.description}</p>
              <p>{elem.price}$</p>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default ProductListPage;
