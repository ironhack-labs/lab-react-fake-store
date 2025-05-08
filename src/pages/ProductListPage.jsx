import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`;

const ResizedImage = styled.img`
  width: 100px;
  height: 100px;
`;

const API_URL = "https://fakestoreapi.com";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ProductListPage">
      {products &&
        products.map((product) => {
          return (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Container>
                <ResizedImage src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>price: ${product.price}</p>
                <p>Category: ${product.category}</p>
                <p>
                  Rating: {product.rating.rate}({product.rating.count} reviews)
                </p>
              </Container>
            </Link>
          );
        })}
    </div>
  );
};

export default ProductListPage;
