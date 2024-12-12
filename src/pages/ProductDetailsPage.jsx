import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../components/layouts/page-layout/page-layout";


function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const {productId} = useParams();
  const { image, title, category, description, price } = product

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [productId]);


  return (
    <PageLayout className="d-flex flex-column gap-4 align-items-start">
      <img src={image} alt={title} style={{width: "150px"}}/>
      <p className="bg-info rounded" style={{width: "150px"}}>{category}</p>
      <h2>{title}</h2>
      <div className="d-flex gap-6 align-items-start">
        <p className="text-end w-50">{description}</p>
        <p className="text-info fw-bold ">{`$${price}`}</p>
      </div>
    </PageLayout>
  );
}

export default ProductDetailsPage;
