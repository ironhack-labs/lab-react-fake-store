import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./stylePages.css";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  if (products === undefined) {
    return <h3>...Cargando</h3>;
  }

  return (
    <div className="ProductListPage">
      {products.map((elem) => {
        return (
          <>
            <Link to={`/product/details/${elem.id}`} key={elem.id}>
              <div className="cardsHome">
                <div className="productListImg">
                  <img src={elem.image} alt="foto" />
                </div>
                <h4>{elem.title}</h4>
                <p>{elem.category}</p>
                <p>${elem.price}</p>
                <p>{elem.description.slice(0, 20)}</p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default ProductListPage;
