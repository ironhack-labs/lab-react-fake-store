import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error)=>{console.log(error)});
  }, []);
  //console.log(products)

    return (
    <div className="ProductListPage">
      {products.map(({ category, description, id, image, price, title }) => (
        <Link to={`/product/details/${id}`} key={id}>
        <div className="productRow">
          <div className="cell image"><img src={image} alt={title} /></div>
          <div className="cell title">{title}</div>
          <div className="cell category">{category}</div>
          <div className="cell price">${Number(price).toFixed(2)}</div>
          <div className="cell description">{description}</div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
