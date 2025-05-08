import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
        .then((response) => { 
          return response.json();
        }).then((data) => {
          //console.log("Parsed response: ", data);
          setProducts(data);
        }).catch((err) => console.log("Something went wrong!", err));
  }, [products])

  if(products.length === 0){
    return (<div>Loading...</div>)
  }

  return (
    <div className="ProductListPage">
      { products.map( product => 
        <div key={product.id} className="table-layout">
          <div className="table-img table-col-sml"><img src={product.image} alt={product.title} /></div>
          <div className="table-col bold-font"><Link to={`/product/details/${product.id}`}>{product.title}</Link></div>
          <div className="table-col-sml">{product.category}</div>
          <div className="table-col-sml bold-font">${product.price.toFixed(2)}</div>
          <div className="table-col table-descr">{product.description}</div>
        </div>
      ) }
    </div>
  );
}

export default ProductListPage;
