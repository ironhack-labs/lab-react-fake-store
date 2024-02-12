import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);
  const urlLink = "https://fakestoreapi.com/products";
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(urlLink)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [urlLink]);

  return (
    <div className="ProductListPage">
      {products !== null ? (
        products.map((elem) => {
          console.log(elem);
          return (
            <div className="panelContainer" key={elem.id}>
              <div className="imgContainer">
                <img src={elem.image} alt="Description" />
              </div>
              <div className="infoContainer">
                <p>{elem.title}</p>
                <p>{elem.price}</p>
                <p>{elem.category}</p>
                <p>{elem.description}</p>
              </div>
              <button
                onClick={() => {
                  navigate(`/product/details/${elem.id}`);
                }}
              >
                View Details
              </button>
            </div>
          );
        })
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default ProductListPage;
/*
title:
price:
category:
image:
description:
*/
