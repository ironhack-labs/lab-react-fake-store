import { useState, useEffect } from "react";
import axios from 'axios'
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
const apiProductsUrl = 'https://fakestoreapi.com/products';


function ProductListPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {                   
    getAllProducts() 
  }, [])

  const getAllProducts = () => {
    axios
      .get(apiProductsUrl)
      .then(response =>{
        setProducts(response.data) //Guardamos url de API en el estado del componente
        console.log('Lista de products: ', response.data)
      })
      .catch(error => console.log('Hay un error de tipo: ', error))

  }


  return (
    <div className="ProductListPage">
      {
        products.map(product=>{
          return( 
          <Link to={`/product/details/${product.id}`}>
            <ProductCard key={product.id}  {...product}/>  
          </Link>
        )
        })
      }
    </div>
  );
}

export default ProductListPage;
