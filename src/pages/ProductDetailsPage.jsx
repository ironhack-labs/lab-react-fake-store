import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(true)
  const { productId } = useParams()

  useEffect(() => { loadDetails() }, [productId])

  const loadDetails = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setisLoading(false)
      })
      .catch(err => console.log(err))
  }






  return (
    <div>
      {
        isLoading
          ?
          <h2>Tranqui que ya va...</h2>
          :

          <article className="card" key={product.id} >
            <img src={product.image} alt={product.title} />
            <h3 className="title">{product.title}</h3>
            <p className="category">{product.category}</p>
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>
          </article>

      }

    </div >
  );
}

export default ProductDetailsPage;
