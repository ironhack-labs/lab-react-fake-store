import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((r)=>{
      console.log(r.data)
      setProducts(r.data)
    })
    .catch((e) => {console.log(e)})
  }, [])

  const productList = products.map((e,i) => {
    return <Link to={`/product/details/${e.id}`}>
      <div key={i} className="card">
        <div className="content"><img src={e.image} alt={e.id}/></div>
        <div className="content"><p><b>{e.title}</b></p></div>
        <div className="content"><p>{e.category}</p></div>
        <div className="content"><p>{e.price}</p></div>
        <div className="content"><p>{e.description}</p></div>
    </div>
    </Link>


  } );


  return (
    <div className="ProductListPage">
      {productList}
    </div>
  );
}

export default ProductListPage;
