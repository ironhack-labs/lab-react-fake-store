import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./product-list-page.css";

const http = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {"Content-Type": "application/json"}
});

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await http.get("/products");
      setProducts([...response.data])
    } catch (error) {
      console.error(error);
    }
  };

  fetchProducts();
}, []);


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      { products?.map((prod) =>{
        const {id, title, price, description, category, image} = prod;
        return (
          <div key={id} className="d-flex align-items-center border-1 bg-white" onClick={() =>{navigate(`/product/details/${id}`)}}>
            <div className="m-1 p-2">
              <img className="object-fit-contain border-1 border-black-subtle p-2" src={image} alt={title} />
            </div>
            <div className="m-1 p-2">
              <h3><strong>{title}</strong></h3>
            </div>
            <div className="m-1 p-2">
              <p>{category}</p>
            </div>
            <div className="m-1 p-2">
              <p>{price}</p>
            </div>
            <div className="m-1 p-2">
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
