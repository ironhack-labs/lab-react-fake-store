import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        return setProducts(data);
      })

      .catch((err) => {
        
      });
  }, []);

  if (products === null) {
    return <h3>... buscando productos</h3>;
  }

  return (
    <div >
      {products.map((cadaProducto) => {
        return (
          <Link
            to={`/product/details/${cadaProducto.id}`}
            key={cadaProducto.id}
          >
            <div className="">
              <img src={cadaProducto.image} alt="" />
              <p className="mediano">{cadaProducto.title}</p>
              <p className="chico">{cadaProducto.category}</p>
              <p className="chico">{cadaProducto.price}</p>
              <p className="grande">{cadaProducto.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
