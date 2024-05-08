import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  //1. crear estado para data externa:
  const [products, setProducts] = useState([]);
  //2. usamos useEffect componentDidMount solo para crear componente
  useEffect(() => {
  //3. llamar a la api
  fetch('https://fakestoreapi.com/products')
  //4. alamacenar data en el estado
  .then((response) => {
    return response.json()
  })
  
  .then((response ) => {
    setProducts(response)
  })

  .catch((error) => {
    console.log(error)
  })

  })
  //5. gestor de espera
  if (products === null) {
    return <h3>... buscando productos</h3>
}



  return (
    <div className="ProductListPage">
      {products.map((eachProduct) => {
        return(
        <div className="list-container" key={eachProduct.id}>
          <Link to={`/product/details/${eachProduct.id}`}> 
          <img src={eachProduct.image} alt={eachProduct.title} width="100px"/>
          <p>{eachProduct.title}</p>
          <p>{eachProduct.category}</p>
          <p>{eachProduct.price}</p>
          <p>{eachProduct.description}</p>
          </Link>
        </div>)
      })}
          
    </div>
  );
}
          


export default ProductListPage;
