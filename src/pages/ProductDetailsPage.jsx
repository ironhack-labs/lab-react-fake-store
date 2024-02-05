import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ClothesDetailsPage = () => {
  const [clothes, setClothes] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchClothesDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setClothes(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchClothesDetails();
  }, [productId]);

  if (!clothes) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{clothes.title}</h1>
      <p>{clothes.description}</p>
      <p>Price: ${clothes.price}</p>
    </div>
  );
};

export default ClothesDetailsPage;
