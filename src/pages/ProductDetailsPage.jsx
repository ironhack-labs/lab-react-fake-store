import { useState, useEffect, useParams } from "react";


function ProductDetailsPage() {
  
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProductsDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        if (response.ok) { //when there's a response
          const detailsData = await response.json() //create the json file out of the response
          console.log(detailsData)
          setProduct(detailsData) //adding the new data to products
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchProductsDetails(); //calling the function, otherwise it doesn't work

  }, [productId])


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <div>
        <img src={product.image} alt={product.title} />
        <button type="button" className="productCategory">{product.category}</button>
      </div>
      <div>
        <h2>{product.title}</h2>
        <div className="descriptionNPrice">
          <p>{product.description}</p>
          <h2>{product.price}</h2>
        </div>
      </div>
      <button type="button" className="backBTN">Back</button>
    </div>
  );
}

export default ProductDetailsPage;
