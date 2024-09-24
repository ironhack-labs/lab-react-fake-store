import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

export const Cart = () => {
  const [products, setProducts] = useState();
  const params = useParams();

  useEffect(() => {
    getData();
  }, [params.cartId]);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/carts/${params.cartId}`
      );
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  if (products === undefined) {
    return (
      <div>
        <h3>...cargando</h3>
      </div>
    );
  }
  return (
    <div>
      <p>Usuario{products.userId}</p>
      <p>Fecha{products.date}</p>
      {products.products.map((e, index) => {
        return (
          <div key={index}>
            <p>
              Referencia de producto: {e.productId} cantidad: {e.quantity}
            </p>
          </div>
        );
      })}
      <Link to={"/"}>Back</Link>
    </div>
  );
};
