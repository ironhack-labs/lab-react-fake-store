import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  if (products === null) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="ProductListPage">
      {products.map((element, index) => {
        return (
          <div key={index} className="card">
            {element.image && <img className="ProductImg" src={element.image} alt="Product image" />}
            <h2>{element.title}</h2>
            <p>{element.category}</p>
            <p>{element.price}€</p>
            <p>{element.description}</p>

             <Link to={`/product/details/${element.id}`}>
                            <button>More details</button>
                        </Link>
          </div>
        )
      })}
    </div>
  );
}

export default ProductListPage;
