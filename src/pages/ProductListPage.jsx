import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


function ProductListPage() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
      .then(response => {
          setProducts(response.data)
      })
      .catch(e => {
          console.log('Error getting products from the API...')
          console.log(e);
      })
  }, [])


  return (
    <div className="ProductListPage">
    {products !== null &&
    products.map((prodDet) => {
        return (
            <Link to={`/product/details/${prodDet.id}`}>
            <div key={prodDet.id} className="product-box">
                <img src={prodDet.image}/>
                <p><strong>{prodDet.title}</strong></p>
                <p>{prodDet.category}</p>
                <p>{prodDet.price}</p>
                <p className="description">{prodDet.description}</p>
            </div>
            </Link>
        )
    })}
    </div>
  );
}

export default ProductListPage;
