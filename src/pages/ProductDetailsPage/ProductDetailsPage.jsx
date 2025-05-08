import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";

import { Link } from "react-router-dom";

import "./ProductDetailsPage.css"

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


  return (


    <div>

      <Navbar />

      <div className="ProductDetailsPage">

        <div className="image-container">
          <img src={product.image} alt="Product" />
        </div>

        <p className="category">{product.category}</p>

        <p className="title">{product.title}</p>

        <div className="info">
          <p className="description">{product.description}</p>
          <p className="price">{product.price}€</p>
        </div>

        <hr />

        <div className="button">
          <Link to="/">
            <button>Volver</button>
          </Link>
        </div>


      </div>


    </div>
  );
}

export default ProductDetailsPage;
