import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([])

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="">
      {products.length ? (
        <div className="">
          {products.map((product) => (
            <div className="flex  border-b-2 my-9 p-2 gap-4" key={product.id}>
              <Link to={`/product/details/${product.id}`}>
                <img
                  src={product.image}
                  alt="product image"
                  className="h-[20vh] w-[15vw] object-cover"
                />
              </Link>
              <h3 className="font-extrabold">{product.title}</h3>
              <span>{product.category}</span>
              <span>{product.price}</span>
              <p className="w-[30vw]">{product.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  )
}

export default ProductListPage