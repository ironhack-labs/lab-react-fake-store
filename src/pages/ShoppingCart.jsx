import axios from "axios";
import { useEffect, useState } from "react"

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);
  let number = Math.floor(Math.random() * 7) + 1

  useEffect ( () => {
    axios.get(`https://fakestoreapi.com/carts/${number}`)
    .then ( (response) => {
      const productsId = response.data.products.map( element => element.productId)
      
      const fetchProduct = (id) => {
        return axios.get(`https://fakestoreapi.com/products/${id}`);
      };
      const promisesArray = productsId.map(id => fetchProduct(id));
      return Promise.all(promisesArray);
    })
    .then ( (response) => {
      let result = response.map( element => element.data);
      console.log(result);
      setProducts(result)
    }) 
    .catch ( error => console.log(error))
  } ,[] )

  return (
    <div >
        { products.map((product, index) => {
          return (
          <div key={index} className="item-product">
              <img src={product.image} />
              <div>{product.category}</div>
              <div>{product.title}</div>
              <div>{product.description}</div>
              <div>${product.price}</div>         
          </div>
        )
        })} 
    </div>
  )
  

}