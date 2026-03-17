import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const {productId} = useParams()

  const baseURL = 'https://fakestoreapi.com/products/'

  const [productDetail, setProductDetail] = useState(null)

  const getProductDetail = () => {
    axios
      .get(baseURL + productId)
      .then((result) => {
        setProductDetail(result.data)
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getProductDetail()
  },[productId])

  if (!productDetail) {
    return <div className="ProductDetailsPage"><h2>Cargando...</h2></div>;
  }

  return (
    <div className="ProductDetailsPage">
      <div className="product-detail">
        <img src={productDetail.image}/>
        <h1>{productDetail.title}</h1>
        <p>{productDetail.description}</p>
        <h1>{productDetail.price}</h1>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
