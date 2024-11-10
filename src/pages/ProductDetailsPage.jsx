import "./ProductDetailsPage.css"

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = "https://fakestoreapi.com"

function ProductDetailsPage() {

  const [product, setProduct] = useState({});
  const { productId } = useParams()



  useEffect(() => {
    fetchProductDetails()
  }, [])

  const fetchProductDetails = () => {
    axios
      .get(`${API_URL}/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(err => console.log(err))
  }
  console.log(product)


  return (
    <div className="ProductDetailsPage">
      <h1>Product details </h1>
      <hr />
      <div className="DetailsData">
        <img src={product.img} alt="logo producto" />
        <h2>{product.title}</h2>
        <h2>{product.category} </h2>
        <h3>{product.price} </h3>
        <p>{product.description} </p>
        <Link to={"/"} ><button>Back</button></Link>
      </div>

    </div>
  );
}

export default ProductDetailsPage;
