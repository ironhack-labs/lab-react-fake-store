import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"

const API_URL = "https://fakestoreapi.com/products"

function ProductDetailsPage() {
  const { productsId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetchProductDetails()
  }, [])

  const fetchProductDetails = () => {
    axios
      .get(`${API_URL}/${productsId}`)
      .then(response => setProduct(response.data))
      .catch(err => console.log(err))
  }

  if (!product) return <p>Cargando detalles del producto...</p>

  return (
    <div className="ProductDetailsPage">
      <h1>Detalles del producto: {product.title}</h1>
      <hr />
      <p>Descripción: {product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <img src={product.image} alt={product.title} className="product-image" />
      <hr />
      <Link to="/products">Volver a productos</Link>
    </div>
  );
}

export default ProductDetailsPage;
