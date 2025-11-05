import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json()
      })
      .then((productsData) => {
        setProducts(productsData)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  // --------------------------style----------------------------------

  const productListStyle = {
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-evenly",
    alignItems:"center",
    width: "100%",
    height:"500px"
  }
  const productListImageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    width: "70%",
    height:"160px"
  }
  const productListTitleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    fontSize: "16px"
  }
  const productListCategoryStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    fontSize: "16px"
  }
  const productListPriceStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    fontSize: "16px"
  }
  const productListDescriptionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    fontSize: "16px"
  }






  // --------------------------style----------------------------------


  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}} className="ProductListPage">
      {
        products.map((eachProduct) => {
          return (
            <div style={productListStyle}>
              <Link key={eachProduct.id} to={`/product/details/${eachProduct.id}`}>
              <div style={productListImageStyle}>
                <img style={{height:"120px",width:"150px"}} src={eachProduct.image} alt="" />
              </div>
              <div style={productListTitleStyle}>
                <h6>{eachProduct.title}</h6>
              </div>
              <div style={productListCategoryStyle}>
                <h6>{eachProduct.category}</h6>

              </div>
              <div style={productListPriceStyle}>

                <h6>{eachProduct.price}</h6>
              </div>
              <div style={productListDescriptionStyle}>
                <h6>{eachProduct.description}</h6>

              </div>
              
              
              
              </Link>
            </div>
          )
        }

        )
      }
    </div>
  );
}

export default ProductListPage;
