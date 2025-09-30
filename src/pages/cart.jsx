import React, { useEffect } from "react";
import axios from "axios";
const cart = () => {
  useEffect(() => {
    async function getCart() {
      try {
      } catch (err) {
        console.log(err);
      }

      getCart();
    }
  }, []);

  return (
    <div>
      <h5>hahaha </h5>
    </div>
  );
};

export default cart;
