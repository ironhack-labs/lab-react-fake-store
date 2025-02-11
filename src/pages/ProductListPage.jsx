import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  //store list of product
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {

    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      //to handle error
      .catch(e => console.log('Error', e))
  }, []);

  //to display 'Loading',if page is still loading
  if (products === null) {
    return <h2>Loading.....</h2>
  }

  return (

    <>
      <div className="ProductListPage" >


        {/* Render list of products here */}

        {products.map((productObj, index) => {
          return (
            <Link to={`/product/details/${productObj.id}`} >
              <div key={productObj.id} className="box">


                <img src={productObj.image} alt={productObj.title} />
                <h2> <b> {productObj.title}  </b></h2>
                <p> {productObj.category}</p>
                <p>${productObj.price}</p>
                <p> {productObj.description}</p>

              </div>
            </Link>
          )
        })}
      </div>
    </>
  );
}

export default ProductListPage;
