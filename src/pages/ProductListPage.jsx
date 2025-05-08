import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductListPage.css"

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then(response => setProducts(response.data)).catch(error => console.log("this error:", error));
    return () => { };
  }, []);

  return (
    <div className="ProductListPage">
      {
        products.map(element => {
          return (
            <Link key={element.id} to={`/product/details/${element.id}`}>
              <div className="major-container">
                <img className="container-part" src={element.image} alt="" />
                <p className="container-part"><span className="boldq">{element.title}</span></p>
                <p className="container-part">{element.category}</p>
                <p className="container-part">$ {element.price}</p>
                <p className="container-part">{element.description}</p>
              </div>
            </Link>
          );
        })
      };
    </div>
  );
}

export default ProductListPage;
