import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()

      setProducts(data)

    } catch (error) {
      console.log(error)
    }
  }

  if (products === null) {
    return <h3>... cargando</h3>
  }

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((eachProduct) => {
        return (
          <Link to={`/product/details/${eachProduct.id}`} key={eachProduct.id} className="card">
            <div className="image-container">
              <img src={eachProduct.image} alt="product image" />
            </div>

            <h3><strong>{eachProduct.title}</strong></h3>
            <p>{eachProduct.category}</p>
            <p>${eachProduct.price}</p>
            <p className="description">{eachProduct.description}</p>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
