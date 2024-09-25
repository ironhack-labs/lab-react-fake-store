import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./detailsPageStyle.css"

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const params = useParams()
  console.log(params)
  console.log(params)
  console.log(params)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setProduct(null)
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
      const data = await response.json();
      setProduct(data);
            // setProduct(response.data)
    } catch(error) {
      console.log("error")
    }
  }

  if (product === null) {
    return (<h3>...loading page</h3>)
  }

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <div className="details">
      <img className="imageProduct" src={product.image} alt="" />

      <p className="productCategory">{product.category}</p>
      <div className="titleDescriptionPrice">
      <p className="productTitle">{product.title}</p>

      <div className="descriptionPrice">

      <p className="productDescription">{product.description}</p>

      <p className="productPrice">${product.price}</p>
      </div>
      </div>
      <Link to="/"><button className="itemButton"></button></Link>
    </div>
    </div>
  );
}

export default ProductDetailsPage;
