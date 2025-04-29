import { useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const { productId } = useParams()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data)
      })
      .catch((e) => {
        console.log('error', e);
      });
  }, []);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
<div className="ProductDetailsPage">
  <div className='ProductListPage'>
    <img src={product.image} alt={product.title} />
    <h3><strong>{product.title}</strong></h3>
    <p>{product.category}</p>
    <p>${product.price}</p>
    <p>{product.description}</p>

    <Link to="/">Back to Home</Link>
  </div>
</div>
  )
}

export default ProductDetailsPage;
