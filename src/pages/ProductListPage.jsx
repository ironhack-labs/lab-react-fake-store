import { useEffect} from "react";
import { Link } from "react-router-dom";  
import axios from "axios";

function ProductListPage({products,setProducts}) {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  
  useEffect(()=>{
    axios
    .get("https://fakestoreapi.com/products")
    .then((response)=>{
      setProducts(response.data);
      console.log(products);
    })
    .catch(error=>{
      console.log("get list error: ", error);
    })
  },[])
  
  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {products.map((element=>{
        return(
          <>
            <Link to={`/product/details/${element.id}`}>
              <div className="Product" key={element.id}>
                <section className="section1 flex order">
                  <img src={element.image} alt={element.title} />
                  <h2>{element.title}</h2>
                  <h3>{element.category}</h3>
                  <h3>${element.price}</h3>
                </section>
                <section className="section2 flex order">
                  <h3 className="description">{element.description}</h3>
                </section>
              </div>
            </Link>
          </>
        )
      }))}
    </div>
  );
}

export default ProductListPage;
