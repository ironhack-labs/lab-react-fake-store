import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).

  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => loadProducts(), [])
  const loadProducts = () => {

    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
        setisLoading(false)
      })
      .catch(err => console.log(err))
  }



  return (
    <div>
      <article>
        <h1>Listado de productos</h1>
        <hr />
        {
          isLoading
            ?
            <h2>Tranqui que ya va...</h2>
            :
            products.map(product => {
              return (
                <Link to={`product/details/${product.id}`} key={product.id}>
                  <article className="card" >
                    <img src={product.image} alt={product.title} />
                    <h3 className="title">{product.title}</h3>
                    <p className="category">{product.category}</p>
                    <p className="price">${product.price}</p>
                    <p className="description">{product.description}</p>
                  </article>
                </Link>
              )
            })
        }



      </article>
    </div >
  );
}

export default ProductListPage;
