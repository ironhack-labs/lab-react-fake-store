import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURl = "https://fakestoreapi.com/products";

function ProductListPage() {
  const [fetching, setFetching] = useState(true);
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    console.log("useEffect- Initial render");
    axios.get(apiURl).then((response) => {
      setClothes(response.data);
      setFetching(false);
    });
  }, []);

  if (fetching) return <p>Loading . . .</p>;

  return (
    <div>
      <h3>Clothes</h3>
      {clothes.map((clots) => {
        return (
          <Link key={clots.id} to={`/product/details/${clots.id}`}>
            <div className="card">
              <img src={clots.image} alt="" />
              <h3>{clots.title}</h3>
              <p>{clots.description}</p>
              <p>{clots.category}</p>
              <p>Price: {clots.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
