import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  console.log("productId: ", productId);


  // To fetch the product details, set up an effect with the `useEffect` hook:
  const fetchProduct = async () => {
    try{
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if (response.ok) {
        console.log("Response format: ", response);
        const productData = await response.json();
        setProduct(productData);
        console.log("Product data format: ", productData);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchProduct();
  }, [productId]); // execute fetchProduct() everytime productId changes

  return (
    <div className="ProductDetailsPage">

      {/* Render product details here */}
      <div className="card productDetailCard">
        <img src={product.image} alt={product.title} className="productImg" />

        <div className="label">{product.category}</div>
        <h2 className = 'product-title'> {product.title}</h2>
        <div className="productDetailText">
          <p>{product.description}</p>
          <p>Price: <span> ${product.price} </span></p>
        </div>
        <hr />

        <div className="flex-center">
          <Link to="/">
            <button className="btn-primary">Back</button>
          </Link>
        </div>

      </div>

    </div>

  );
}
export default ProductDetailsPage;

 /* Fetch data using axios:
useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      const productData = response.data;
      console.log(productData);

      setProduct(productData);

    })
    .catch((error) => {
      console.log("error: ", error);
    });
  }, [productId]);
  
  */
