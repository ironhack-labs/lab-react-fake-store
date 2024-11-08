import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = 'https://fakestoreapi.com'

function ProductDetailsPage() {

  const { productId } = useParams()

  const [product, setProduct] = useState({});

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

    <div className="ProductDetailsPage">

      <div className="CardEstructure">

        <img src={product.image} alt="" />

        <h2>{product.category}</h2>

        <h2>{product.title}</h2>

        <h2>{product.description}</h2>

        <h2> € {product.price}</h2>

        <Link to={'/'}> ⬅️ Volver a listado de productos </Link>

      </div>

    </div>

  );
}

export default ProductDetailsPage;
