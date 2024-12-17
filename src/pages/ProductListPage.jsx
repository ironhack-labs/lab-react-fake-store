import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    console.log("hi")
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (response.ok) { //when there's a response
          const productsData = await response.json() //create the json file out of the response
          console.log(productsData)
          setProducts(productsData) //adding the new data to products
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts(); //calling the function, otherwise it doesn't work

  }, [])

  return (
    <div className="ProductListPage">
      <h1>Products List</h1>
      <ul> {/* first map through the array and make an li and the roughly the product card */}
        {products.map(product => (
          <li key={product.id} className="productCardDiv">
            <Link to={`/product/details/${product.id}`}> {/* dont formget to import it! */}
              <img src={product.image} alt={product.title} width={100} />
              <div>
                <h2>{product.title}</h2>
                <p>{product.category} </p>
                <p>Price: {product.price}€</p>
                <p>{product.description}</p>
              </div>


            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
