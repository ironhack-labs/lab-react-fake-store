import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((element, index) => {
        return (
          <Link key={index} to={`/product/details/${element.id}`}>
            <div className="item-box">
              <img src={element.image} />
              <h1>{element.title}</h1>
              <div>{element.category}</div>
              <div>{element.price}€</div>
              <div>{element.description}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
