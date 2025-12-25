import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./product-detail-page.css";

const http = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {"Content-Type": "application/json"}
});

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const { productId } = params;

  useEffect(()=>{
    const fetchProduct = async () => {
      try {
        const response = await http.get(`/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProduct();

  },[]);

  const { id, title, price, description, category, image } = product;

  return (
    <div className="ProductDetailsPage d-flex flex-column align-items-center" id={id}>
      <div>
        <img className="object-fit-contain border-1 border-black-subtle p-2" src={image} alt={title} />
      </div>
      <div>
        <span className="">{category}</span>
        <h2 className="fs-4 "><strong>{title}</strong></h2>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </div>
      <Link to="/">
        <button className="btn bg-success text-white" type="button">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
