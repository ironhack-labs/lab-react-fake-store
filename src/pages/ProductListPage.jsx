import { useEffect , useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      setProducts(response.data)
      setLoading(false)
    })
    .catch((e) => {
      console.log(e)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <p className="loading-text">Cargando productos...</p>
  }
  if (error) {
    return <p className="error-text" style={{ color: "red" }}>{error}</p>
  }

  return (
    <div className="ProductListPage">

      {products.map((eachProduct) => (
        <Link to={`/product/details/${eachProduct.id}`}> 
        <div key={eachProduct.id} className="product-card">

          <img 
            src={eachProduct.image} 
            alt={eachProduct.title}
            className="product-image"/>

          <h2 className="product-title">{eachProduct.title}</h2>

          <p className="category">{eachProduct.category}</p> 

          <p>{`$${eachProduct.price}`}</p>

          <p className="description">
            {eachProduct.description.length > 100
              ? `${eachProduct.description.substring(0, 100)}...`
              : eachProduct.description}
          </p>

        </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
